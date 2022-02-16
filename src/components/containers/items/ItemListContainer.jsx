import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import { getDocs, getFirestore, query, where, collection } from 'firebase/firestore'

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {typeId} = useParams()

    useEffect(() => {
        if(typeId) {
            const db = getFirestore()
            const queryPokemons = query(collection(db, 'pokemons'), where('type', '==', typeId))
            getDocs(queryPokemons).then(res => setData(res.docs.map((pok)=>({id: pok.id, ...pok.data()}))))
        } else {
            const db = getFirestore()
            const queryPokemons = collection(db, 'pokemons')
            getDocs(queryPokemons).then(res => setData(res.docs.map((pok)=>({id: pok.id, ...pok.data()}))))
        }
    }, [typeId]);

    return (
        <div>
            <ItemList details={data}/>
        </div>
    )
}

export default ItemListContainer;