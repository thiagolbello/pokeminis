import { useCartContext } from "./CartContext"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import Resumen from "./Resumen"
import { Box, Button, TextField } from "@mui/material"
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const Cart = () => {
    const { cartList, vaciarCarrito, sumarPrecios } = useCartContext ()
    const [cond, setCond] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()    
        let orden = {}      

        orden.buyer = dataForm
        orden.total = sumarPrecios();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        const db = getFirestore()

        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))

        const queryCollection = collection(db, 'items')

        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCond(true)    
    }

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
        <center>  
            {
                cond  ? 
                    <Resumen idOrden={idOrden} />
                : 
                    <>
                        {cartList.map(prod => <li key={prod.id} style={{ listStyleType: 'none' }}>
                            <Box sx={{display: 'flex', alignItems: 'center', bgcolor: 'white', overflow: 'hidden', borderRadius: '1em', boxShadow: 10, fontWeight: 'bold', maxWidth: '50%', margin: '1em', fontFamily: 'Helvetica'}}>
                                <Box component="img" alt={prod.name} src={prod.image}/>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, m: 3, minWidth: { md: 350 }}}>
                                    <Box component="span" sx={{ fontSize: 32, mt: 1 }}>{prod.name}</Box>
                                    <Box component="span" sx={{ fontSize: 20, m: 1 }}>Cantidad: {prod.cantidad}</Box>
                                    <Box component="span" sx={{ color: 'green', fontSize: 22, m: 1 }}>${prod.price}</Box>
                                    <Box sx={{mt: 1.5, p: 0.5, backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1), borderRadius: '5px', color: 'primary.main', fontWeight: 'medium', display: 'flex', fontSize: 12, alignItems: 'center', '& svg': {fontSize: 21, mr: 0.5}}}><ErrorOutlineIcon/>QUEDAN {prod.stock} CARTAS!</Box>
                                </Box>
                            </Box>

                        </li>)}

                        <Button variant="contained" style={{backgroundColor: 'red'}} onClick={vaciarCarrito}>Vaciar Carrito</Button>
                        <h3 style={{fontFamily: 'Helvetica'}}>Precio Total: {sumarPrecios()}</h3>
                        <form 
                            onSubmit={realizarCompra} 
                        >
                            <TextField 
                                type='text' 
                                name='name' 
                                placeholder='Name' 
                                onChange={handleChange}
                                value={dataForm.name}
                                variant="outlined"
                                style={{margin: '1em'}}
                            /><br/>
                            <TextField 
                                type='text' 
                                name='phone'
                                placeholder='Telefono' 
                                onChange={handleChange}
                                value={dataForm.phone}
                                variant="outlined"
                                style={{margin: '1em'}}
                            /><br/>
                            <TextField 
                                type='email' 
                                name='email'
                                placeholder='Email' 
                                onChange={handleChange}
                                value={dataForm.email}
                                variant="outlined"
                                style={{margin: '1em'}}
                            /><br/>
                            <Button onClick={realizarCompra} variant="contained" style={{backgroundColor: 'green', margin: '1em'}}>Generar Orden</Button>
                        </form>
                    </>

            }          
        </center>
    )
}

export default Cart;