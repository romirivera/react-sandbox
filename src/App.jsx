import './App.css';
import ListaUsuarios from './listaUsuarios';
import NavBar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/usuarios' element={<ListaUsuarios />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

/*export default App;*/
