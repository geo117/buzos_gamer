import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/navbar/navbar.js';
import Fotter from './componentes/footer/footer.js';
import Inicios from './componentes/principal/inicio.js';
import InfoImg from './componentes/infoImg/InfoImg.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicios />} />
          <Route path='/InfoImage' element={<InfoImg />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
