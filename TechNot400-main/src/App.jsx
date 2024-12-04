import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Pages/Homepage/Homepage';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Career from './Components/Pages/Career/Career';
import Navbar from './Components/Navigation/Navbar';
import FooterMain from './Components/Footer/FooterMain';
import ObjectiveDetails from './Components/Pages/About/AboutUsPages/ObjectiveDetails/ObjectiveDetails';
import ServiceDetails from './Components/Pages/Services/ServicesPages/ServiceDetails/ServiceDetails';
import ServiceKnowMoreDetailsMain from './Components/Pages/Services/ServicesPages/ServiceDetails/ServiceDetailsPages/ServiceKnowMore/ServiceKnowMoreDetailsMain';
import BookCall from './Components/Pages/BookUs/BookCall';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/bookus' element={<BookCall/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path="/objectiveDetails/:id" element={<ObjectiveDetails/>} />
        <Route path='/serviceDetails/:slug' element={<ServiceDetails/>}/>
        <Route path="/serviceDetails/:slug/:place" element={<ServiceKnowMoreDetailsMain />} />      
      </Routes>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
