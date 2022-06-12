import React from "react";
import Home from "./pages/home";
import Card from "./components/card";
import "./globalStyle.css";
import { Routes, Route } from "react-router-dom";
import CardDetail from "./components/cardDetail";
import Description from "./pages/Description";
import Navbar from "./components/Navbar.js";
import Category from "./pages/Category";
import Programming from"./pages/Programming";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development/:url" element={<CardDetail />} />
        <Route path="description" element={<Description />} />
        <Route path="Category" element={<Category />} />
        <Route path="Programming" element={<Programming/>}/>
      </Routes>
    </div>
  );
}

export default App;
