import React, { useState } from "react";
import "./mesa.scss";
import Cartas from "../cartas/Cartas";
import CartasIA from "../cartas/CartasIA";
import cartas from "../../cartas.json";
import Opciones from "../opciones/Opciones";

const Mesa = () => {
  const [empezar, setEmpezar] = useState(false);
  const [turno, setTurno] = useState(true)
  const [ronda, setRonda] = useState(0)
  const [manoCompleta, setManoCompleta] = useState([]);
  const [manoCompletaIA, setManoCompletaIA] = useState([]);
  console.log("ronda numero:", ronda);

  const mano = [];
  const manoIA = [];

  const repartirMazo = () => {
    for (let i = 0; i < 3; ) {
      const numCarta = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
      const numCartaIA = Math.floor(Math.random() * (40 - 1 + 1)) + 1;

      if (
        numCarta !== mano.find((carta) => carta.id === numCarta) &&
        numCarta !== manoIA.find((carta) => carta.id === numCarta) &&
        numCartaIA !== mano.find((carta) => carta.id === numCarta)
      ) {
        mano.push(cartas.find((carta) => carta.id === numCarta));
        manoIA.push(cartas.find((carta) => carta.id === numCartaIA));
        i++;
      } else {
        console.log("carta repetida");
      }
    }

    setEmpezar(true);
    setManoCompleta(mano);
    setManoCompletaIA(manoIA);
  };

  return (
    <div className="mesa">
      {empezar ? (
        <>
          <CartasIA manoIA={manoCompletaIA} turno={turno} setTurno={setTurno} ronda={ronda} setRonda={setRonda}/>
          <div className="margin-auto">
            <Cartas mano={manoCompleta} turno={turno} setTurno={setTurno} ronda={ronda} setRonda={setRonda}/>
            <Opciones mano={manoCompleta} manoIA={manoCompletaIA} turno={turno} setTurno={setTurno} ronda={ronda} setRonda={setRonda}/>
          </div>
        </>
      ) : (
        <button className="mesa__button" onClick={repartirMazo}>
          Empezar
        </button>
      )}
    </div>
  );
};

export default Mesa;
