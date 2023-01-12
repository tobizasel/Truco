import React,{useState} from "react";
import CartaIA from "./CartaIA";

const CartasIA = ({manoIA, turno, setTurno, ronda, setRonda}) => {

  const [tiradaIA, setTiradaIA] = useState([0, 0, 0])
  console.log(manoIA);

  const cartasIdIA = []
  let cartaSeleccionada;

  if (!turno) {
    //console.log("mano" , manoIA);
    manoIA.forEach(carta => {
      cartasIdIA.push(carta.id)
    });
    cartaSeleccionada = cartasIdIA[Math.floor(Math.random() * (3 - 1 + 1)) + 1]
  }

  return (
    <div className="cartasIA">
      {manoIA.map((carta) => (
        <CartaIA
          tiradaIA={tiradaIA}
          numero={carta.numero}
          palo={carta.palo}
          id={carta.id}
          setTiradaIA={setTiradaIA}
          turno={turno}
          setTurno={setTurno}
          ronda={ronda}
          setRonda={setRonda}
          cartaSeleccionada={cartaSeleccionada}
        />
      ))}
    </div>
  );
};

export default CartasIA;
