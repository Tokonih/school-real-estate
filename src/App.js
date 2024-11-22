import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Picked from './pages/picked';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Picked/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
