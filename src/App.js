import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import Personaje from './components/Personaje';

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/personaje/:id' element={<Personaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
