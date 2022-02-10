import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import {Routes, Route} from "react-router-dom";
import ForgotForm from './components/login/ForgotForm/forgot.component';
import Home from './components/homepage/homepg';
import Detail from './components/homepage/detailClass';
// import { Home } from './components/homepage/home.component';

function App() {
  
  return (
    
    <div className="App">
          <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/forgot" element={<ForgotForm />} />
            <Route  path="/home" element={<Home/>} />
            <Route  path="/detail" element={<Detail/>} />
          </Routes>
    </div>
  );
}

export default App;
