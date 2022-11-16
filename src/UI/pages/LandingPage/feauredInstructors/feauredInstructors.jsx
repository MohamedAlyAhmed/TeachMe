import React, { useContext } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";
import { DataContext } from "../../../../DataContext";

export const FeaturedInstructors = () => {
  let { instructors } = useContext(DataContext);


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
        {instructors.map((e,index) => (
          <InstructorCard instructor={e} key={index}/>
        ))}
      </Slider>
    </div>
  );
}

