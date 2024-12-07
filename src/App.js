import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Offerbtn from "./Components/Offerbtn/Offerbtn";
// import { Routes, Route } from "react-router";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Services from "./Components/Services/Services";
import Details from "./Components/Details/Details";
import Coaches from "./Components/Coaches/Coaches";
import Login from "./Components/Login/Login";

function App() {
  
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/offer" element={<Offerbtn />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
