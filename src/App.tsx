import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./page/login";
import Student from "./page/student";

type studentType = [
  {
    name: string;
    age: number;
    address: string;
  }
];

const arrStudent = [
  {
    name: "quyet",
    age: 20,
    address: "abc",
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Student rows={arrStudent} />
      </header>
    </div>
  );
}

export default App;
