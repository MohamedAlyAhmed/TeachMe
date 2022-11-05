import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

export class FeaturedInstructors extends Component {
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
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </Slider>
      </div>
    );
  }
}

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #979a9a;
    height: 220px;
    width: 30px;
  }
`;
