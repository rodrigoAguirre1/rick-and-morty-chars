import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CharacPage } from './components/CharacPage';
import { NotFound } from './components/NotFound';
import { Location } from './components/Location';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<CharacPage />} />
          <Route path='/location/:name' element={<Location />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;