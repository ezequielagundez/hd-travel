import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Argentina from "./pages/Argentina/Argentina";
import SocialLinks from './components/social/SocialLinks';
import Contacto from "./pages/Contacto/Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import DestinationDetails from "./components/ArgentinaPage/DestinationDetails";
import Brasil from "./pages/Brasil/Brasil";
import Europa from "./pages/Europa/Europa";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/argentina" element={<Argentina />} />
        <Route path="/brasil" element={<Brasil />}  />
        <Route path="/europa" element={<Europa />}  />
        <Route path="/:country/:destinationId" element={<DestinationDetails />} /> 
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      
      <SocialLinks />
        
      <Footer />
    </div>
  );
}

export default App;
