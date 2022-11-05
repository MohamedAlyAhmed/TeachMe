import React from "react";
import "./landingPage.css";
import { Button } from "react-bootstrap";
import Picks from "./Picks/Picks";
import { Map } from "./map/map";
import InstructorsPicks from "./InstructorPicks/InstructorsPicks";
//import { FeaturedCourses, HomeWrapper } from "./FeaturedCourses/FeaturedCourses";

function LandingPage() {
  return (
    <>
      <header>
        <div className="header-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 background head">
                <h1 className="display-2 fw-bold">Learn Online</h1>
                <p>From the biggest Arabic library of video-based courses</p>
                <h4>
                  Only for <span> 91.67 EGP</span> /month
                </h4>
                <p>Billed yearly</p>
                <Button variant="danger btn">Subscribe now</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Picks />
      <Map />
      <div class="col-sm-12 col-md-12 mb-4">
        <h3 class="text-center mt-4 text-secondary">Our instructors</h3>
        <p className="header text-center">
          Our instructors are real world experts bringing real knowledge and
          offering unique experiences that will help you reach your personal and
          career goals
        </p>
      </div>
      <InstructorsPicks />
    </>
  );
}

export default LandingPage;
