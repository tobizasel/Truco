import React, { useState } from 'react'
import "./cartas.scss"


const Carta = ({numero, palo, id, setTirada, tirada, turno, setTurno, ronda, setRonda, posCarta, setPosCarta}) => {
    
    const [usada, setUsada] = useState(false)
    const [prueba, setPrueba] = useState(0)
    let imagen
    console.log(tirada);

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
            setPrueba(encontrarCarta(e.target.id));
            setTirada([...tirada, e.target.id])
            setTurno(false)
            setRonda(ronda + 1)
            setUsada(true)
            console.log("tirada",tirada);
        }

    }

    const encontrarCarta = (id) => {
        let cartaElegidinsta = tirada.find(el => el == id)
        if (cartaElegidinsta === tirada[1]) {
            cartaElegidinsta = "carta-1-elegida";
        } else if (cartaElegidinsta === tirada[2]) {
            cartaElegidinsta = "carta-2-elegida";
        } else if (cartaElegidinsta === tirada[3]) {
            cartaElegidinsta = "carta-3-elegida";
        } else{
            console.log("la concha de mi madre");
        }
        return cartaElegidinsta;
    }

  return (
    <div className={`carta ${prueba}`} id={id}  onDoubleClick={usada ? () => console.log("ya fue usada") : tirarCarta}>
        <h2 className='carta__titulo'>{numero}</h2>
        <img src={imagen} alt="carta de truco" className='carta__imagen'/>
    </div>
  )
}

export default Carta