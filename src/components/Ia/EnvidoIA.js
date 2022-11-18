import React from 'react'

const EnvidoIA = ({manoIA}) => {
    
    console.log("bolas");

    const calcularEnvido = () => {
        console.log(manoIA);
        const mismoPalo = manoIA.filter((item, index) => index !== manoIA.palo.indexOf(item));
        console.log(mismoPalo);
    }

    calcularEnvido();
  
return (
    <div>
        bolas
    </div>
  )
}

export default EnvidoIA