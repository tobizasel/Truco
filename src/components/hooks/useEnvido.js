import React from 'react'

export const useEnvido = (mano) => {

    let envido = 0;


        const mismoPaloArr = mano.reduce((acc, carta) => {
          acc[carta.palo] = ++acc[carta.palo] || 0;
          return acc;
        }, {});
  
        const mismoPalo = mano.filter( (carta) => {
          return mismoPaloArr[carta.palo];
        });
        
        if (mismoPalo.length === 2) {
          for (let i = 0; i < mismoPalo.length; i++) {
  
            if (mismoPalo[i].numero !== 10 && mismoPalo[i].numero !== 11 && mismoPalo[i].numero !== 12) {
              envido += mismoPalo[i].numero
            }
          }
          envido += 20;
        } else if(mismoPalo.length === 3){
          envido = 40
        } else {
          const numerosOrdenados = []
          mano.forEach(carta => {
            numerosOrdenados.push(carta.numero)
          });
          const numerosEnvido = numerosOrdenados.filter(numero => numero <= 7)
          
          envido = Math.max(...numerosEnvido)
        }
      

  return (
    envido
  )
}
