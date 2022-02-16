import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
        const [pokemonsDetails, setPokemonsDetails] = useState({});
        const {detailsId} = useParams();

        useEffect(() => {
            const db = getFirestore();
            const queryDetail = doc(db, 'pokemons', detailsId)
            getDoc(queryDetail).then((res) => {
                setPokemonsDetails({id: res.id, ...res.data()});
            });
        }, [detailsId]);

    return (
        <div>
            <ItemDetail details={pokemonsDetails}/>
        </div>
    )
}

export default ItemDetailContainer;