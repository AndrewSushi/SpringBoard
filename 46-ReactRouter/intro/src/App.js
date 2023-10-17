import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes
import './App.css';
import Drink from './Drink';
import Eat from './Eat';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
