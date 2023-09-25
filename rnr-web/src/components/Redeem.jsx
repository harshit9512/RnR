import React, { Component } from 'react';
import { routerServices } from '../services/RouterServices';

class Redeem extends Component {
  constructor(props){
    super(props);

    this.state = {
      points : this.props.routeData }
  }

  render() {
    return (
      <div>
        <h2>Earned Points : {this.state.points}</h2>
        <p>1 earned point = 1 Rs</p>
        <br />
        <span>Redeem Amount : </span><input type="text" name="amount" id="redeemAmount" />
        <button>Redeem</button>
      </div>
    )
  }
}
export default routerServices(Redeem);