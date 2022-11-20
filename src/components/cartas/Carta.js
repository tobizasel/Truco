import React, { useState } from 'react'
import "./cartas.scss"


const Carta = ({numero, palo, id, setTirada, tirada, turno, setTurno, ronda, setRonda}) => {
    
    const [usada, setUsada] = useState(false)
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

    const tirarCarta = (e) => {
        if (turno) {
            setTirada([...tirada, e.target.id])
            setTurno(false)
            setRonda(ronda + 1)
            setUsada(true)
        }

    }

  return (
    <div className={`carta ${tirada.map(el => el == id ? " hidden " : "") }`} id={id}  onDoubleClick={usada ? () => console.log("ya fue usada") : tirarCarta}>
        <h2 className='carta__titulo'>{numero}</h2>
        <img src={imagen} alt="carta de truco" className='carta__imagen'/>
    </div>
  )
}

export default Carta