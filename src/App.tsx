import { Routes, Route } from "react-router-dom";
import {Login} from "./component/login/login";
import Forgot from "./component/login/forgot";
import Home from "./component/home/homepage/home";
import Detail from "./component/home/homepage/DetailClass"
import List_student from "./component/home/homepage/List_student";
import Student_profile_home from "./component/home/homepage/Student_profile";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEviRgiNs_XzxojGdGHAKCHsFiQZa6ec",
  authDomain: "lms-app-8e7f3.firebaseapp.com",
  projectId: "lms-app-8e7f3",
  storageBucket: "lms-app-8e7f3.appspot.com",
  messagingSenderId: "108833384149",
  appId: "1:108833384149:web:7530a7479261c885d8e45c",
  measurementId: "G-Y1TXT099KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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