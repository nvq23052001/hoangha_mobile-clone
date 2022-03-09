import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./page/login";
import Student from "./page/student";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Student />
      </header>
    </div>
  );
}

export default App;
