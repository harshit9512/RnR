import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Redeem from "./components/Redeem";
import Reward from "./components/Reward";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<LoginForm/>}></Route> */}
            <Route exact path="/" element={<LoginForm/>}></Route>
            <Route exact path="/login" element={<LoginForm/>}></Route>
            <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact path="/redeem" element={<Redeem/>}></Route>
            <Route exact path="/reward" element={<Reward/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
