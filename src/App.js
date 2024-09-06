//import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);

  const showAlert=(type,message)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);},
      1500
    );
  }
  const toggleMode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success","Light mode has been enabled");
      document.title="TextUtils-Light Mode";
      // setInterval(()=>{
      //   document.title="Deekshith is the creator";
      // },2000);
    }
    else{
      setmode("dark");
      document.title="TextUtils-Dark Mode";
      document.body.style.backgroundColor="#000000";
      showAlert("success","Dark mode has been enabled");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utils" aboutText="About Textutils" mode={mode} togglemode={toggleMode}/>
        <Alerts alert={alert}/>
        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>  
        </div>
      </Router> 
    </>
  );
}

export default App;
