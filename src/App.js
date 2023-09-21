import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicios from './componentes/principal/inicio.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Inicios />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
