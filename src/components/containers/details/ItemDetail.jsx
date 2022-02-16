import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../ItemCount"
import { useCartContext } from "../cart/CartContext"
import { CardActionArea } from '@mui/material';

const ItemDetail = ({details}) => {

    const [show, setShow] = useState (true)
    const {cartList, agregarAlCarrito} = useCartContext()

    console.log(cartList)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito({...details, cantidad: contador})
    }
    
    return (
        <center>
            <Card sx={{ maxWidth: 345, margin: '1em' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={`.././${details.image}`}
                    alt={`${details.name}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"style={{fontFamily: 'fantasy', fontSize: '50px'}}>
                            {details.name}
                        </Typography>
                        <Typography style={{margin: '1em'}} color="text.secondary">
                            {details.description}
                        </Typography>
                        <Typography style={{margin: '1em'}} color="black">
                            Weight: {details.weight}
                        </Typography>
                        <Typography style={{margin: '1em'}} color="black">
                            Height: {details.height}
                        </Typography>
                        <Typography style={{margin: '1em'}} color="green">
                            Price: {details.price}
                        </Typography>
                        <Typography style={{margin: '1em'}} color="blue">
                            Stock: {details.stock}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {show ? <ItemCount stock={details.stock} onAdd={onAdd}/> : 
            <div>
                <Link to='/cart'><button>Terminar la Compra</button></Link>
                <Link to='/'><button>Continuar Comprando</button></Link>
            </div>
            }
        </center>
    )
}

export default ItemDetail