import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./page/login";
import Student from "./page/student";

//adasdasd
type studentType = {
  name: string;
  age: string;
  address: string;
};
function App() {
  const [count, setCount] = useState<number>(0);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const [student, setStudent] = useState<studentType[]>([
    {
      name: "quyet",
      age: "20",
      address: "abc",
    },
  ]);

  const getDataForm = () => {
    const data: any = {
      name: name,
      address: address,
      age: age,
    };

    setStudent([...student, data]);
    console.log(student);
  };

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setIsDisplay(!isDisplay)}>Display</button>
      <p>{count}</p>
      <header className="App-header">
        {isDisplay && <Student rows={student} />}
      </header>
      <form>
        <div className="form__box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>
        <div className="form__box">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
          />
        </div>
        <div className="form__box">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            getDataForm();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
