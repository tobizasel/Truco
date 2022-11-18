import React, { useState } from 'react';
import Carta from "./Carta";
import './cartas.scss'

const Cartas = ({mano}) => {

  const [tirada, setTirada] = useState(false)

  return (
    <div className='cartas'>
        {mano.map(carta => <Carta hidden={tirada} numero={carta.numero} palo={carta.palo} id={carta.id} setTirada={setTirada}/>)}
    </div>
  )
}

export default Cartas;