import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { HomeWrapper } from "../FeaturedCourses/FeaturedCourses";
import { FeaturedInstructors } from "../feauredInstructors/feauredInstructors";

class InstructorsPicks extends Component {
  render() {
    return (
      <section className="picks">
        <div className="container">
          <div className="row">
            <div className="col--ld-12 col-md-12 ">
              <HomeWrapper>
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