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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    
    ],
  };

 

  return (
    <div>
      <Slider {...settings}>
        {courses.map((e,index) => (
          <CourseCard course={e} key={index}/>
        ))}
      </Slider>
    </div>
  );
}



export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #f3f1f1;
    height: 260px;
    width: 30px;
    border-radius: 5px;
    
  }
  .slick-prev:before {
    color: black;
  }
  .slick-next:before {
    color: black;
  }
  .slick-prev { 
   right: 10px; /
    !important; // add important if you need to override 
   
}

`;
