import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apparels from './Apparels/Apparels.js'
import Price from './Price/Price.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element = {<Apparels/>}/>
        <Route path='price'  element = {<Price/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
