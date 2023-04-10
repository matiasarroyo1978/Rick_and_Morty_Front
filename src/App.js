import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Table from "./components/Table";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Rickandmortyfetch from "./components/Rickandmortyfetch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/about" element={<About />} />
          <Route path="/rickandmorty" element={<Rickandmortyfetch />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;