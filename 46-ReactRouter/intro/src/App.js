import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom"; // Import Routes
import Navbar from "./Navbar";
import './App.css';

import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eat' element={<Eat />} />
          <Route path='/drink' element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
