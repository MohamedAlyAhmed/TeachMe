import "./map.css";
import { Link } from "react-router-dom";
import MyButton from "../../../components/Button/Button";
import React from "react";
import CountUp from "react-countup";
const BASE_CATEGORY = "/category";

function Counter() {
  return (
    <div>
      <div className="counter">
        <CountUp start={3000000} end={3453140} duration={6} separator="," />
      </div>
    </div>
  );
}

export function Map() {
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <Link to={`${BASE_CATEGORY}`}>
          <MyButton isOutline={true}>Browse Courses</MyButton>
        </Link>
      </div>

      <header className="myHeader">
        <div className="hero-image1">
          <div className="hero-content1">
            <div className="hero-content-inner1">
              <Counter />
              <h1 className="display-2 fw-bold">
                Learning experiences worldwide.
              </h1>
              <h2>& counting...</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
