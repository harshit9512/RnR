import React, { Component } from "react";
import { routerServices } from "../services/RouterServices";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import PointsCard from "./PointsCard";
import "../App.css";
import profilePic from '../profile-pic.jpg';
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

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
        <div>
          <SearchBar/>
          <div className="side-main">
            <div>
              <SideBar />
            </div>
            <div className="dash-main">
              <div className="greeting">
                <h2 className="greet-lb">Hello Intellectian!</h2>
                <small>Recognizing excellence abd rewards in a more meaningful way at our workplace...</small>
              </div>
              <div className="emp-detail">
                <NavBar empName = {this.state.employeeData.employeeName}/>
                {/* <p className="font-weight-light fs-6">Employee ID : {this.state.employeeData.employeeId}</p>
                <p className="font-weight-light">E-mail ID : {this.state.employeeData.employeeEmail}</p>
                <p className="font-weight-light">Phone No : {this.state.employeeData.employeePhone}</p>
                <p className="font-weight-light">Total Points : {this.state.employeeData.totalPoints}</p> */}
                <div className="cards">
                  <PointsCard type="allocatedPts" pts={this.state.employeeData.allocatedPoints} />
                  <PointsCard type="earnedPts" pts={this.state.employeeData.earnedPoints} />
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
