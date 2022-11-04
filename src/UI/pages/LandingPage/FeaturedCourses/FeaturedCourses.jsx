import React, { Component } from "react";
import Slider from "react-slick";
import "./FeaturedCourses.css"
import styled from "styled-components"
import CourseCard from "../../../components/CourseCard/CourseCard";

export class FeaturedCourses extends Component {

  render() {
    const settings = {
      dots: false,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,

    };
    return (
      <div>


        <Slider {...settings}>


          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />

        </Slider>
      </div>
    );
  }
}

export const HomeWrapper = styled.div`

.slick-arrow
{
  background-color:#979A9A;
  height:220px;
  width:30px

}
`
  ;