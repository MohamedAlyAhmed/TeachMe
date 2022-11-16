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
                <div className="text-center mb-5 pb-5 mt-5">
                  <a href="http://localhost:4000/instructors">
                    <MyButton isOutline={true}>See all instructors</MyButton>
                  </a>
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
