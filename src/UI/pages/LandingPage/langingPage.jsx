import React from "react";
import "./landingPage.css";
import Picks from "./Picks/Picks";
import { Link } from "react-router-dom";
import { Map } from "./map/map";
import InstructorsPicks from "./InstructorPicks/InstructorsPicks";
import MyButton from "../../components/Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_CATEGORY = "/category";

function LandingPage() {
  return (
    <>
      <header>
        <div className="hero-image">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1 className="display-2 fw-bold">Learn Online</h1>
              <p>From the biggest Arabic library of video-based courses</p>
              <Link to={`${BASE_CATEGORY}`}>
                <MyButton>
                  Browse Courses &nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </MyButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Picks />
      <Map />
      <div className="col-sm-12 col-md-12 mb-4">
        <h3 className="text-center mt-4 text-secondary text-dark fw-bold">
          Our instructors
        </h3>
        <p className=" text-center text-muted">
          Our instructors are real world experts bringing real knowledge and
          offering unique experiences .
        </p>
      </div>
      <InstructorsPicks />
    </>
  );
}

export default LandingPage;
