import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../Components/navbar/navbarComp";

const App = () => {
  return (
    <div className="app">
      <NavbarComp className="nav-div" />
      <Outlet></Outlet>
    </div>
  );
};

export default App;
