import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter } from "react-router-dom";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/food/burrito">
          <Food name="burrito"/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
