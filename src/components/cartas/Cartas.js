import React, { useState } from "react";
import Carta from "./Carta";
import "./cartas.scss";

const Cartas = ({ mano, turno, setTurno, ronda, setRonda }) => {
  const [tirada, setTirada] = useState([0, 0, 0]);

  return (
    <div className="cartas">
      {mano.map((carta) => (
        <Carta
          tirada={tirada}
          numero={carta.numero}
          palo={carta.palo}
          id={carta.id}
          setTirada={setTirada}
          turno={turno}
          setTurno={setTurno}
          ronda={ronda}
          setRonda={setRonda}
        />
      ))}
    </div>
  );
};

export default Cartas;
