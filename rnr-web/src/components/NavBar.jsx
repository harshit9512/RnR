import React, { Component } from "react";
import profilePic from "../profile-pic.jpg";
import { routerServices } from "../services/RouterServices";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        empName :this.props.empName
    };
  }

  render() {
    return (
      <div>
        <nav class="navbar bg-body-tertiary nav-bar">
          <div class="container">
            <a
              href=""
              className="d-flex align-items-center link-dark text-decoration-none"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={profilePic}
                alt=""
                width="50"
                height="50"
                className="rounded-circle me-2"
              ></img>
              <strong>{this.state.empName}</strong>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
export default routerServices(NavBar);