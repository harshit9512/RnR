import React, { Component } from "react";
import { routerServices } from '../services/RouterServices'

class Reward extends Component {
  constructor(props) {
    super(props);

    this.state = {
        points : this.props.routeData
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Allocated Points : {this.state.points}</h2>
        <p>1 earned point = 1 Rs</p>
        <br />
        <span>Reward Associate : </span>
        <input type="text" name="amount" id="redeemAmount" />
        <button>Reward</button>
      </div>
    );
  }
}
export default routerServices(Reward);
