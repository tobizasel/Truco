import React from 'react'
import "./cartas.scss"


const Carta = ({numero, palo, id, setTirada, hidden}) => {
    

    let imagen
    switch(palo){
        case "espada": 
            imagen = ("../assets/espada.png")
            break
        case "basto":
            imagen = ("../assets/basto.png")
            break
        case "oro":
            imagen = ("../assets/oro.png")
            break
        case"copa": 
            imagen = ("../assets/copa.png")
            break
    }

    const tirarCarta = (id) => {
        setTirada(true)
    }

  return (
    <div className={`carta ${hidden ? "hidden" : ""}`} hidden={hidden} onDoubleClick={() => tirarCarta(id)}>
        <h2 className='carta__titulo'>{numero}</h2>
        <img src={imagen} alt="carta de truco" className='carta__imagen'/>
    </div>
  )
}

export default Carta