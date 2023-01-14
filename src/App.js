import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CharacPage } from './components/CharacPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<CharacPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;