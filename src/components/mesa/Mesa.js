import React, { useState } from "react";
import "./mesa.scss";
import Cartas from '../cartas/Cartas';
import CartasIA from "../cartas/CartasIA";
import cartas from "../../cartas.json"
import Opciones from "../opciones/Opciones";

const Mesa = () => {
  const [empezar, setEmpezar] = useState(false);
  const [manoCompleta, setManoCompleta] = useState([]);
  const [manoCompletaIA, setManoCompletaIA] = useState([]);


  const mano = [];
  const manoIA = [];

  const repartirMazo = () => {
    for (let i = 0; i < 3;) {
        const numCarta = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
        const numCartaIA = Math.floor(Math.random() * (40 - 1 + 1)) + 1;

        if (numCarta !== mano.find(carta => carta.id === numCarta) && numCarta !== manoIA.find(carta => carta.id === numCarta) && numCartaIA !== mano.find(carta => carta.id === numCarta)) {
            mano.push(cartas.find(carta => carta.id === numCarta));
            manoIA.push(cartas.find(carta => carta.id === numCartaIA));
            i++
        }else {
            console.log("carta repetida");
        }
    }

    setEmpezar(true)
    setManoCompleta(mano)
    setManoCompletaIA(manoIA)
  }



  return (
    <div className="mesa">
      {empezar ? <><CartasIA manoIA={manoCompletaIA}/> <Cartas mano={manoCompleta}/> <Opciones mano={manoCompleta} manoIA={manoCompletaIA}/> </>: <button className="mesa__button" onClick={repartirMazo}>Empezar</button>}
    </div>
  );
};

export default Mesa;
