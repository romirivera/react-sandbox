import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    //verificar si el usuario está autenticado -> false
    navigate('/login');
  }, [navigate]);
  return <div>Home</div>;
}
export default Home;
