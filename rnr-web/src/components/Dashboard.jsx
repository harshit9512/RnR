import React, { Component } from 'react'
import { routerServices } from '../services/RouterServices'

class Dashboard extends Component {

  render() {
    return (
      <div><h1>Dashboard</h1></div>
    )
  }
}
export default routerServices(Dashboard);