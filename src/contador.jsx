//useState ---> manejar estado en un coomponente

import { useState } from 'react';

function Contador() {
  //codico js
  const [contador, setContador] = useState(0);
  //    estado    fn update el estado    valor inicial del estado

  if (contador < 0) {
    setContador(0);
  }

  return (
    //codigo UI

    <div>
      <h1>Contador:{contador}</h1>
      <h2>hola</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reset</button>
    </div>
  );
}

export default Contador;
