import axios from "axios";

// const token = JSON.parse(localStorage.getItem("user"));
// console.log(token);

let token = "";
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
