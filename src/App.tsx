import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/login/LoginForm/login.component';
import {Routes, Route} from "react-router-dom";
import ForgotForm from './components/login/ForgotForm/forgot.component';
import Sidebar from './components/homepage/Sidebar/Sidebar';
// import { Home } from './components/homepage/home.component';

function App() {
  
  return (
    
    <div className="App">
          <Routes>
            <Route  path="/login" element={<LoginForm />} />
            <Route  path="/forgot" element={<ForgotForm />} />
            <Route  path="/home" element={<Sidebar/>} />
          </Routes>
    </div>
  );
}

export default App;
