import React from "react";
import "./opciones.scss"
import EnvidoIA from "../Ia/EnvidoIA";
import { useEnvido } from "../hooks/useEnvido";

const Opciones = ({mano, manoIA, turno, setTurno, ronda, setRonda}) => {

    const CantarEnvido = () => {
      const envidoJ = useEnvido(mano)
      const envidoIA = useEnvido(manoIA)
      console.log(mano, envidoJ);
      console.log(manoIA, envidoIA);
      setTurno(false);
      setRonda(ronda + 1)
    }


  return (
    <div className="opciones">
      <button className="opciones__boton" disabled={!turno} onClick={ronda < 1 ? CantarEnvido : () => {console.log("no se puuede cantar envido")}}>Envido</button>
      <button className="opciones__boton" disabled={!turno} onClick={"cantarTruco"}>Truco</button>
      <button className="opciones__boton" disabled={!turno} onClick={""}>Aceptar</button>
      <button className="opciones__boton" disabled={!turno} onClick={""}>Rechazar</button>
      <button className="opciones__boton" disabled={!turno} onClick={""}>Me voy al maso</button>
    </div>
  );
};

export default Opciones;
