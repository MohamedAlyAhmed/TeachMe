import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card " style={{ width: "14rem" }}>
          <img
            src={require("../../assets/html5.jpg")}
            className="card-img-top "
            alt="course image"
          />
          <div className="card-body position-relative">
            <div className=" text-light duration animate__fadeInRightBig">
              12h 20min / 11 lessons
            </div>
            <h5 className="card-title mb-4">Course title</h5>
            <div className="d-flex justify-content-between align-items-center">
              <p
                className="card-text align-self-center mb-0 text-secondary"
                style={{ fontSize: 14 }}
              >
                instructor Name
              </p>
              <button className="btn btn-light">
                <i
                  className="fa-light fa-bookmark text-dark"
                  title="Save for later"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
