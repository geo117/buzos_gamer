import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/navbar/navbar.js';
import Fotter from './componentes/footer/footer.js';
import Inicios from './componentes/principal/inicio.js';
import InfoImg from './componentes/infoImg/InfoImg.js';
import Login from './componentes/login/login.js';
import Perfil from './componentes/perfil/perfil.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicios />} />
          <Route path='/InfoImg' element={<InfoImg />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Perfil' element={<Perfil />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
