import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/portfolio' element={<Portfolio />} /> 
        <Route path='/about-me' element={<AboutMe />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
