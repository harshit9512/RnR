import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../reward-img.jpg'
import image2 from '../redeem-img.jpg'
import { routerServices } from "../services/RouterServices";

class PointsCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: this.props.type,
            points: this.props.pts
        }

        this.redeemBtnHandler = this.redeemBtnHandler.bind(this);
        this.rewardBtnHandler = this.rewardBtnHandler.bind(this);
    }

    rewardBtnHandler(){
        this.props.navigate("/reward", { state: this.state.points });
    }

    redeemBtnHandler(){
        this.props.navigate("/redeem", { state: this.state.points });
    }

  render() {
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div div className="row g-0">
            <div className="col-md-4">
              <img
                src={this.state.type === "allocatedPts" ? image1 : image2}
                className={this.state.type === "allocatedPts" ? "img-fluid rounded-start" : "img-fluid rounded-start earned-img"}
                alt="..."
              ></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.type === "allocatedPts" ? "Allocated Points" : "Earned Points"}</h5>
                <p className="card-text">
                  Available to {this.state.type === "allocatedPts" ? "Reward" : "Redeem"} : {this.state.points}
                </p>
                <button className="btn btn-primary redeem" onClick={this.state.type === "allocatedPts" ? this.rewardBtnHandler : this.redeemBtnHandler}>{this.state.type === "allocatedPts" ? "REWARD ASSOCIATE" : "REDEEM POINTS"}</button>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default routerServices(PointsCard);
