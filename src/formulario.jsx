import { useState } from 'react';
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('nombre', nombre);
    console.log('email', email);
    setNombre('');
    setEmail('');
  };

  console.log('valor de los estados', nombre, email);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type='text'
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            placeholder='Ingrese su email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
