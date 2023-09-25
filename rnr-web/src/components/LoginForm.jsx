import React, { Component } from "react";
import { routerServices } from "../services/RouterServices";
import userServices from "../services/UserServices";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
    };
    this.userIdHandler = this.userIdHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }
  userIdHandler = (event) => {
    this.setState({ userId: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  loginHandler = (e) => {
    //Login Validations
    e.preventDefault();
    userServices.getUserById(this.state.userId).then((res) => {
      console.log(res.data.password);
      if (this.state.password === res.data.password) {
        this.props.navigate("/dashboard", { state: res.data });
      }
    });
  };

  render() {
    return (
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center sign-in-lb">Sign In</h3>
          <div className="mb-2">
            <p>
              <input
                type="text"
                id="userId"
                name="userId"
                placeholder="userId"
                className="form-control"
                onChange={this.userIdHandler}
                required
              ></input>
            </p>
          </div>
          <div className="mb-2">
            <p>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={this.passwordHandler}
                required
              ></input>
            </p>
          </div>
          <div className="d-grid">
            <p>
              <button className="btn btn-primary" onClick={this.loginHandler}>
                Sign In
              </button>
            </p>
          </div>
          <div id="create-account-wrap">
            <p>
              Forgot Password? <a href="https://www.googole.com">Reset</a>
            </p>
          </div>
        </form>
        </div>

      </div>
    );
  }
}

export default routerServices(LoginForm);
