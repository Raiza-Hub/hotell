import React from "react";
import "./index.css";
import { Route, Routes } from "react-router";
import Home from './router/Home';
import Destinations from './router/Destinations'
import Services from "./router/Services";
import About from "./router/About";
import Contact from './router/Contact'


function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>;
    <Route path="/destination" element={<Destinations/>}/>;
    <Route path="/service" element={<Services/>}/>;
    <Route path="/about" element={<About/>}/>;
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
    </>
  );
}

export default App;
