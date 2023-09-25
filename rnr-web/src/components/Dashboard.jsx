import React, { Component } from "react";
import { routerServices } from "../services/RouterServices";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import logo from '../intellect Logo.png';
import PointsCard from "./PointsCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeData: this.props.routeData,
    };
  }

  searchBtnHandler = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <>
        <div className="container dashboard">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div className="logo">
                  <a className="navbar-brand" href='#'>
                    <img src={logo} className="logo-img" alt="logo" ></img>
                  </a>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-success" onClick={this.searchBtnHandler}>
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <div className="side-main">
            <div>
              <SideBar />
            </div>
            <div className="dash-main">
              <div className="greeting">
                <h2>Hello Intellectian!</h2>
              </div>
              <div className="emp-detail">
              <a href="#" className="d-flex align-items-center link-dark text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                <strong>{this.state.employeeData.employeeName}</strong>
              </a>
                {/* <p className="font-weight-light fs-6">Employee ID : {this.state.employeeData.employeeId}</p>
                <p className="font-weight-light">E-mail ID : {this.state.employeeData.employeeEmail}</p>
                <p className="font-weight-light">Phone No : {this.state.employeeData.employeePhone}</p>
                <p className="font-weight-light">Total Points : {this.state.employeeData.totalPoints}</p> */}
                <div className="cards">
                  <div className="card">
                    <PointsCard type="allocatedPts" pts={this.state.employeeData.allocatedPoints}/>
                  </div>
                  <div className="card">
                    <PointsCard type="earnedPts" pts={this.state.employeeData.earnedPoints}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default routerServices(Dashboard);
