import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine.js";
import './App.css';

import Chips from './Chips';
import Water from './Water';
import Pizza from './Pizza';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/water" element={<Water />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
