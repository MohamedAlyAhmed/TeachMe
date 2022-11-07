import React, { useContext } from "react";
import Slider from "react-slick";
import "./FeaturedCourses.css";
import styled from "styled-components";
import CourseCard from "../../../components/CourseCard/CourseCard";
import { DataContext } from "../../../../DataContext";

export const FeaturedCourses = () => {
  let { courses } = useContext(DataContext);

  const settings = {
    
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div>
      <Slider {...settings}>
        {courses.map((e) => (
          <CourseCard course={e} />
        ))}
      </Slider>
    </div>
  );
};

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #f3f1f1;
    height: 260px;
    width: 30px;
    border-radius: 5px;
  }
`;
