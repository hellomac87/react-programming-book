import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import "./test.css";

function App() {
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
