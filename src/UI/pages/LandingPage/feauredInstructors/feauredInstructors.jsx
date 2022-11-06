import React, { useContext } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";
import { DataContext } from "../../../../DataContext";

export const FeaturedInstructors = () => {
  let { instructors } = useContext(DataContext);

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
        {instructors.map((e) => (
          <InstructorCard instructor={e} />
        ))}
      </Slider>
    </div>
  );
};

// export const HomeWrapper = styled.div`
//   .slick-arrow {
//     background-color: #979a9a;
//     height: 220px;
//     width: 30px;
//     border-radius: 5px;
//   }
// `;
