import React from "react";
import "./landingPage.css";
import Picks from "./Picks/Picks";
import { Map } from "./map/map";
import InstructorsPicks from "./InstructorPicks/InstructorsPicks";
import MyButton from "../../components/Button/Button";

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

                <p>Billed yearly</p>
                <MyButton>Subscribe now</MyButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Picks />
      <Map />
      <div class="col-sm-12 col-md-12 mb-4">
        <h3 class="text-center mt-4 text-secondary">Our instructors</h3>
        <p className="headerText ">
          Our instructors are real world experts bringing real knowledge and
          offering unique experiences .
        </p>
      </div>
      <InstructorsPicks />
    </>
  );
}

export default LandingPage;
