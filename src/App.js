import React from "react";
import "./index.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Destinations from "./routes/Destinations";
import Services from "./routes/Services";
import About from "./routes/About";
import Contact from "./routes/Contact";


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
