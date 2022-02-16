import React, { useState } from "react";


function ItemCount({ stock, onAdd }) {

    const initial = 0

    const [contador, mueveContador] = useState(initial);

    const suma = () => {
        contador < stock
            ? mueveContador(prev => prev + 1)
            : alert("Máximo Stock");
    };

    const resta = () => {
        contador > initial &&
            mueveContador(prev => prev - 1);
    };

    return (
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} >
            <h1 style={{fontFamily: 'helvetica'}}> {contador}   </h1>
            <button onClick={resta} > - </button>
            <button onClick={() => onAdd(contador)} disabled={contador < 1 && 'disabled'}> Agregar al Carrito </button>
            <button onClick={suma} > + </button>
        </div>
    );
}

export default ItemCount;