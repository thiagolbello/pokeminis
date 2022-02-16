import React from 'react';

function Resumen({idOrden}) {
  return <div style={{fontFamily: 'fantasy', fontSize: 50, margin: '3em'}}>
     El id de la orden generada es:  {idOrden}
  </div>;
}

export default Resumen;