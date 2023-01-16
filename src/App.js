import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CharacPage } from './components/CharacPage';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<CharacPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;