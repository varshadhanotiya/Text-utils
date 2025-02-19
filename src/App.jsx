import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Alert = lazy(() => import("./components/Alert"));

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("#141414");
  const [backgroundColor, setBackgroundColor] = useState("#f1f1f1");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBackgroundColor("#f1f1f1");
      setColor("#141414");
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setBackgroundColor("#141414");
      setColor("#f1f1f1");
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <div className="App" style={{ backgroundColor, color }}>
      <Router>
        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        >
          <Navbar mode={mode} toggleMode={toggleMode} />
        </Suspense>

        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        >
          <Alert alert={alert} />
        </Suspense>

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Suspense
                  fallback={
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
                >
                  <TextForm
                    showAlert={showAlert}
                    color={color}
                    backgroundColor={backgroundColor}
                  />
                </Suspense>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <Suspense
                  fallback={
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
                >
                  <About color={color} backgroundColor={backgroundColor} />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
