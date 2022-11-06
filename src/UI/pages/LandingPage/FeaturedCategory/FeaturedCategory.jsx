import React, { useContext } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./FeaturedCategory.css";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { DataContext } from "../../../../DataContext";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        justifyContent: "center",
        display: "flex",
        height: "130px",
        alignItems: "center",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        justifyContent: "center",
        display: "flex",
        height: "130px",
        alignItems: "center",
        borderRadius: "5px",
      }}
      onClick={onClick}
    />
  );
}

export const FeaturedCategory = () => {
  let { categories } = useContext(DataContext);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {categories.map((e) => (
          <CategoryCard category={e} />
        ))}
      </Slider>
    </div>
  );
};
// export  const   FeaturedCategory = () => {
//   let { categories } = useContext(DataContext);

//       const settings = {
//         dots: false,
//         // focusOnSelect: true,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         speed: 500,
//       };
//       return (
//         <div>
//           <Slider {...settings}>
//             {categories.map((e) => (
//               <CategoryCard category={e}/>
//             ))}
//           </Slider>
//         </div>
//       );
//     }

//   export const HomeWrapper = styled.div`
//     .slick-arrow {
//       background-color: #f3f1f1;
//       height: 100px;
//       width: 30px;
//       align-items: center;
//       justify-content: center;
//           }
//   `;
