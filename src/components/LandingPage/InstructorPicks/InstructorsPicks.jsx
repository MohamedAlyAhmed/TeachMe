import React, { Component } from "react";
import Card from "../../../Shared/Card/Card";
import { FeaturedCourses } from "../FeaturedCourses/FeaturedCourses";
import { Button } from "react-bootstrap";
import { HomeWrapper } from "../FeaturedCourses/FeaturedCourses";
import CirculeCard from "../../../Shared/circleCard/circleCard";
import { FeaturedInstructors } from "../feauredInstructors/feauredInstructors";
class InstructorsPicks extends Component {
  render() {
    return (
      <section className="picks">
        <div className="container">
          <div className="row">
            <div className="col--ld-12 col-md-12 ">
              <HomeWrapper>
                {/* <CirculeCard/> */}
                {/* <FeaturedCourses/> */}
                <FeaturedInstructors />
                <div class="text-center">
                  <Button className=" subBtn" variant="outline-danger">
                    See all instructors
                  </Button>
                </div>
              </HomeWrapper>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </section>
    );
  }
}

export default InstructorsPicks;
