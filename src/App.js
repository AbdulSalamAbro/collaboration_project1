import {  Route, Routes } from 'react-router-dom';
import './App.css';
import FirstVersion from './First-Page/FirstVersion';
import Navbar from './First-Page/Navbar';
import HamburgerPage from './First-Page/Hamburger';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstVersion />} />
        <Route path="/ham" element={<HamburgerPage />} />
      </Routes>
    </div>

  );
}

export default App;
