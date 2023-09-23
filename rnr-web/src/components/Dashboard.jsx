import React, { Component } from 'react'
import { routerServices } from '../services/RouterServices'

class Dashboard extends Component {

  constructor(props){
    super(props);

    this.state = {
        employeeData: this.props.routeData
    }
}

  render() {
    return (
    <>
      <div><h1>Dashboard</h1></div>
      <div>
      <h3>My Profile</h3>
      <p>Name : {this.state.employeeData.employeeName}</p>
      <p>Employee ID : {this.state.employeeData.employeeId}</p>
      <p>E-mail ID : {this.state.employeeData.employeeEmail}</p>
      <p>Phone No : {this.state.employeeData.employeePhone}</p>
      <p>Total Points : {this.state.employeeData.totalPoints}</p>
      </div>
    </>
    )
  }
}
export default routerServices(Dashboard);