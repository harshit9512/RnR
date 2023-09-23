import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<LoginForm/>}></Route> */}
            <Route exact path="/" element={<LoginForm/>}></Route>
            <Route exact path="/login" element={<LoginForm/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
