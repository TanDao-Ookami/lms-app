import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/login/LoginForm/login.component';
import {Routes, Route} from "react-router-dom";
import ForgotForm from './components/login/ForgotForm/forgot.component';
import Home from './components/homepage/homepg';
// import { Home } from './components/homepage/home.component';

function App() {
  
  return (
    
    <div className="App">
          <Routes>
            <Route  path="/" element={<LoginForm />} />
            <Route  path="/forgot" element={<ForgotForm />} />
            <Route  path="/home" element={<Home/>} />
          </Routes>
    </div>
  );
}

export default App;
