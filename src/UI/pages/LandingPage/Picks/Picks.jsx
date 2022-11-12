import React from "react";
import { FeaturedCourses } from "../FeaturedCourses/FeaturedCourses";
import "./Picks.css";
import { Button } from "react-bootstrap";
import { HomeWrapper } from "../FeaturedCourses/FeaturedCourses";
import { FeaturedCategory } from "../FeaturedCategory/FeaturedCategory";

function Picks() {
  return (
    <div>
      <section className="picks">
        <div className="container">
          <div className="row">
            <div className="col--ld-12 col-md-12 ">
              {/* <h4>Picks</h4> */}
              <div className="picksHeader">
                <h4 className="float-left categoryHeader">
                  Featured Courses
                </h4>
              </div>


              <HomeWrapper>
                <FeaturedCourses />
                <div className="space"></div>
                <div className="clearfix mt-5 mb-5">
                  <h4 className="float-left categoryHeader">
                    Course Categories
                  </h4>
                </div>
                <FeaturedCategory />
              </HomeWrapper>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </section>
    </div>
  );
}

export default Picks;
