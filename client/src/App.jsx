import React from "react";
import Home from "./components/Home";
import RegisterIOT from "./components/menu-components/RegisterIOT";
import GrantRole from "./components/menu-components/GrantRole";
import RevokeRole from "./components/menu-components/RevokeRole";
import ChangeOwnerShip from "./components/menu-components/ChangeOwnership";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu";


function App() {

  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register-iot" element={<RegisterIOT/>}/>
        <Route path="/grantrole" element={<GrantRole/>}/>
        <Route path="/revokerole" element={<RevokeRole/>}/>
        <Route path="/change-ownership" element={<ChangeOwnerShip/>}/>
      </Routes>
    </Router>
  );
}

export default App;
