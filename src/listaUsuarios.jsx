import { useEffect, useState } from 'react';
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargar, setCargar] = useState(false);
  //useEffect para ejecutar código después de que el componente se renderiza
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
    console.log('ejecutando useEffect');
  }, [cargar]);
  //useEfect indicando dependencias vacias[]- se ejecuta solo una vez cuando se renderiza el componente
  // useEfect sin dependencias se ejecuta cada vez que se renderiza el componente
  //useEfect con dependencias se ejecuta cada vez que se renderiza el componente y cuando cambia el valor de la dependencia
  const handleCargar = () => {
    setCargar((prev) => !prev);
  };
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <button onClick={handleCargar}>Actualizar Lista</button>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.username}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListaUsuarios;
