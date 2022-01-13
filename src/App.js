import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login.component.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Forgot from './components/forgot.component';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header>
      <img class="logo" src="./Frame.png" alt="logo"/>
      </header> */}

      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/forgot" element={<Forgot/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
