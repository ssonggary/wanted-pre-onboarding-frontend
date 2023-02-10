import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component
import { Gnb, Main, Signup, Signin, TodoList } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Gnb />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/todoList" element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
