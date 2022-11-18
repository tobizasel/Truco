import React, { useState } from "react";
import "./opciones.scss"
import EnvidoIA from "../Ia/EnvidoIA";
import { useEnvido } from "../hooks/useEnvido";

const Opciones = ({mano, manoIA}) => {

    const CantarEnvido = () => {
      const envidoJ = useEnvido(mano)
      const envidoIA = useEnvido(manoIA)
      console.log(mano, envidoJ);
      console.log(manoIA, envidoIA);
    }

  return (
    <div className="opciones">
      <button className="opciones__boton" onClick={CantarEnvido}>Envido</button>
      <button className="opciones__boton" onClick={"cantarTruco"}>Truco</button>
      <button className="opciones__boton" onClick={""}>Aceptar</button>
      <button className="opciones__boton" onClick={""}>Rechazar</button>
      <button className="opciones__boton" onClick={""}>Me voy al maso</button>
    </div>
  );
};

export default Opciones;
