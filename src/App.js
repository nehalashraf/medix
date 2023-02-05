import  Navbar  from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import {React } from 'react';
import About from  './Components/About'
import { Routes,Route } from 'react-router-dom';
import Services from './Components/Services';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Blog2 from './Components/Blog2';
function App() {
  return (
      <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Services' element={<Services />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blog/blog2' element={<Blog2 />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
