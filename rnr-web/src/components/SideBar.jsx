import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
    <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-4" width="40" height="32"></svg>
      <span className="fs-5">Dashboard</span>
    </a>
    <hr></hr>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="" className="nav-link active" aria-current="page">
          <svg className="bi me-2" width="16" height="16"></svg>
          Home
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          Products
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          Customers
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          
        </a>
      </li>
      <li>
        <a href="" className="nav-link link-dark">
          <svg className="bi me-2" width="16" height="16"></svg>
          
        </a>
      </li>
      
    </ul>
    <hr></hr>
  </div>
      </div>
    )
  }
}
