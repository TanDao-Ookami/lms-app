import { Routes, Route } from "react-router-dom";
import {Login} from "./component/login/login";
import Forgot from "./component/login/forgot";
import Home from "./component/home/homepage/home";
import Detail from "./component/home/homepage/DetailClass"
import List_student from "./component/home/homepage/List_student";
import Student_profile_home from "./component/home/homepage/Student_profile";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route  path="/" element={<Login />} />
        <Route  path="/forgot" element={<Forgot />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/detailclass" element={<Detail />} />

        <Route  path="/liststudent" element={<List_student />} />
        <Route  path="/studentprofile" element={<Student_profile_home/>} />
      </Routes>
    </div>
  );
}

export default App;