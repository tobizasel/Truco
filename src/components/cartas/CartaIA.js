import React from "react";
import "./cartas.scss";

const CartaIA = ({
  numero,
  palo,
  id,
  setTiradaIA,
  tiradaIA,
  turno,
  setTurno,
  ronda,
  setRonda,
  cartaSeleccionada,
}) => {
  
  if (!turno) {
    setTiradaIA([...tiradaIA, cartaSeleccionada]);
    setTurno(true);
    setRonda(ronda + 1);
    console.log("tiradaIA:", tiradaIA);
  }
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

  return (
    <div
      className={`cartaIA carta ${tiradaIA.map((el) =>
        el == id ? " hiddenIA " : " al-reves "
      )}`}
      id={id}
    >
      <h2 className="carta__titulo">{numero}</h2>
      <img src={imagen} alt="carta de truco" className="carta__imagen" />
    </div>
  );
};

export default CartaIA;
