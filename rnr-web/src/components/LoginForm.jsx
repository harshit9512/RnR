import React, { Component } from "react";
import { routerServices } from "../services/RouterServices";
import userServices from "../services/UserServices";
class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId:'',
            password:''
        }
        this.userIdHandler = this.userIdHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }
    userIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value})
    }
    loginHandler = (e) => {
        //Login Validations
        e.preventDefault();
        userServices.getUserById(this.state.userId).then((res) => {
            console.log(res.data.password);
            if (this.state.password === res.data.password) {
                this.props.navigate("/dashboard", { state: res.data })
            }
        });
    }

    render() {
        return (
        <div>
            <h2>Login</h2>
            <form>
            <p>
                <input
                type="text"
                id="userId"
                name="userId"
                placeholder="userId"
                onChange={this.userIdHandler}
                required
                ></input>
            </p>
            <p>
                <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.passwordHandler}
                required
                ></input>
            </p>
            <p>
                <button className="btn btn-success" onClick={this.loginHandler}>
                    Login
                </button>
            </p>
            </form>
            <div id="create-account-wrap">
            <p>
                Forgot Password? <a href="https://www.googole.com">Reset</a>
            </p>
            </div>
        </div>
        );
    }
}

export default routerServices(LoginForm);