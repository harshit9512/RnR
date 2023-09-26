import React, { Component } from "react";
import logo from '../intellect Logo.png';
import '../App.css'
import profilePic from '../profile-pic.jpg';
import userLogo from '../user-logo.jpg'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bb-1">
          <div className="container-fluid">
            <div className="logo">
              <a className="navbar-brand" href="">
                <img src={logo} className="logo-img" alt="logo"></img>
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <input
                  className="form-control me-2 searchBar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-success"
                  onClick={this.searchBtnHandler}
                >
                  Search
                </button>
                <span style={{marginLeft:"300px"}}>
                    <a href="" className="d-flex align-items-center link-dark text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userLogo} alt="" width="30" height="30" className="rounded-circle me-2"></img>
                        <strong>Harshit</strong>
                    </a>
                </span>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
