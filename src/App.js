import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/login/LoginForm/login.component";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ForgotForm from './components/login/ForgotForm/forgot.component';
import Home from './components/homepage/home.component';

function App() {
  
  return (
    
    <div className="App">
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/forgot" element={<ForgotForm />} />
            <Route exact path="/home" element={<Home/>} />
          </Routes>
    </div>
  );
}

export default App;
