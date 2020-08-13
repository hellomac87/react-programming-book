import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import "./test.css";
import Box1 from "./Box1";

function App() {
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
  return (
    <div className="App">
      <Box1 size={"small"} />
      <Box1 size={"big"} />
    </div>
  );
}

export default App;
