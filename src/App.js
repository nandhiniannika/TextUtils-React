import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //weather a dark mode is enable or not

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "grey";
      showalert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      //     setInterval(()=>{
      //  document.title = "Textutils is Amazing mode"
      //     },2000)
      //     setInterval(()=>{
      //  document.title = "Install Textutils now!!"
      //     },1500)
    } else {
      setmode("light");
      document.body.style.background = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        {/* <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        /> */}
        <Alert alert={alert} />
        {/* <Navbar/>  */}
        {/* //-used for default browser */}
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}

            {/* <Route */}
              {/* exact
              path="/"
              element={ */}
                <Textform
                  showalert={showalert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* } */}
          {/* //   ></Route> */}
          {/* // </Routes> */}
        </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
