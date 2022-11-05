import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "./FeaturedCourses.css";
import { BASE_ULR } from "../../../../redux/reducers/server";
import styled from "styled-components";
import CourseCard from "../../../components/CourseCard/CourseCard";
import axios from "axios";

export const FeaturedCourses = () => {

  const [courses, setCourses] = useState([]);


  useEffect(() => {
    // init componant;
    axios.get(`${BASE_ULR}/courses`).then((data) => {
      console.log(data.data);
      setCourses(data.data);
    });
  }, []);


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

        {
          courses.map((e) => <CourseCard course={e} />)
        }

      </Slider>
    </div>
  );
}

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #f3f1f1;
    height: 207px;
    width: 30px;
 }
`;
