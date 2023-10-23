import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return(
    <div className="VendingMachine">
        <h1><Link to="/chips">Chips</Link></h1>
        <h1><Link to="/water">Water</Link></h1>
        <h1><Link to="/pizza">Pizza</Link></h1>
    </div>
  );
}

export default VendingMachine;
