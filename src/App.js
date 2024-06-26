import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/concerts-booking' element={<Home />}/>
        <Route path='/Signin' element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
