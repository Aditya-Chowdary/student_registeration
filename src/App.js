import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Self-registeration/Signup";
import Login from "./Pages/Login/Login";
import Landing from "./Pages/Landing/Landing"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
