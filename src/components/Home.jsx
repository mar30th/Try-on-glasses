import React, { Component } from "react";
import "./home.css";
import BGImg from "../assets/colorful-powder-explosion-white-background_44314-3537.jpg";
import Model from "../assets/model.jpg";
import G1 from "../assets/g1.jpg";
import G2 from "../assets/g2.jpg";
import G3 from "../assets/g3.jpg";
import G4 from "../assets/g4.jpg";
import G5 from "../assets/g5.jpg";
import G6 from "../assets/g6.jpg";
import G7 from "../assets/g7.jpg";
import G8 from "../assets/g8.jpg";
import G9 from "../assets/g9.jpg";
import V1 from "../assets/v1.png";
import V2 from "../assets/v2.png";
import V3 from "../assets/v3.png";
import V4 from "../assets/v4.png";
import V5 from "../assets/v5.png";
import V6 from "../assets/v6.png";
import V7 from "../assets/v7.png";
import V8 from "../assets/v8.png";
import V9 from "../assets/v9.png";

export default class Home extends Component {
  state = {
    imgGlassess: V1,
  };

  changeGlassess = (img) => {
    document.getElementById("glassessOn").style.display = "block";
    this.setState({
      imgGlassess: img,
    });
  };

  render() {
    return (
      <div id="homePage" className="position-relative">
        <div className="p-5 bg-dark text-white opacity-75 position-absolute w-100"></div>
        <div style={{height: 100, position: "relative", color: "white"}}><h2 className="p-4">TRY GLASSESS APP ONLINE</h2></div>
        <div className="container">
          <div className="row">
            <div className="col-6 p-5">
              <div className="position-relative">
                <img className="w-50 card-img-top" src={Model} alt="" />
                <div
                  id="glassessOn"
                  className="position-absolute"
                  style={{ top: 80, left: 182, width: 200, opacity: 0.7, display: "" }}
                >
                  <img className="w-75" src={this.state.imgGlassess} alt="" />
                </div>
                <div
                  className="overlay position-absolute opacity-50"
                  style={{ height: 110, width: 282, bottom: 0, left: 141 }}
                ></div>
                <div className="position-absolute"
                  style={{ height: 110, width: 282, bottom: 0, left: 141 }}>
                  <h4 className="text-start text-primary">FENDI F8750</h4>
                  <p className="text-start">
                    light pink square lenses define these sunglasses, ending
                    with another of pearl effect tips.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 p-5 position-relative">
              <div className="modelGlassess">
                <img className="w-50" src={Model} alt="" />
              </div>
            </div>
          </div>
          <div className="row bg-white rounded">
            <div
              onClick={() => this.changeGlassess(V1)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G1} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V2)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G2} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V3)}
              className="col-2 align-self-center "
            >
              <img className="w-50 " src={G3} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V4)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G4} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V5)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G5} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V6)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G6} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V7)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G7} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V8)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G8} alt="" />
            </div>
            <div
              onClick={() => this.changeGlassess(V9)}
              className="col-2 align-self-center"
            >
              <img className="w-50" src={G9} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
