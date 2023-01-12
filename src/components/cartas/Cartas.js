import React, { useState } from "react";
import Carta from "./Carta";
import "./cartas.scss";

const Cartas = ({ mano, turno, setTurno, ronda, setRonda }) => {
  const [tirada, setTirada] = useState([""]);
  const [posCartaJ, setPosCartaJ] = useState(1)

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
          posCarta={posCartaJ}
          setPosCarta = {setPosCartaJ}
        />
      ))}
      <div className="placeHolder"></div>

    </div>
  );
};

export default Cartas;
