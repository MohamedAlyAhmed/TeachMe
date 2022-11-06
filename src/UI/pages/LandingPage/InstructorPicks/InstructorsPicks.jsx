import React, { Component } from "react";
import { HomeWrapper } from "../FeaturedCourses/FeaturedCourses";
import { FeaturedInstructors } from "../feauredInstructors/feauredInstructors";
import MyButton from "../../../components/Button/Button";
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
                  <MyButton isOutline={true}>
                    See all instructors
                  </MyButton>
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
