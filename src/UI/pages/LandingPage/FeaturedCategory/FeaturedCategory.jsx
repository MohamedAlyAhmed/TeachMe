import React, { useContext } from "react";
import Slider from "react-slick";
import "./FeaturedCategory.css";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { DataContext } from "../../../../DataContext";



export const FeaturedCategory = () => {
  let { categories } = useContext(DataContext);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
        nextArrow: <SampleNextArrow />,
           prevArrow: <SamplePrevArrow />,
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
        {categories.map((e,index) => (
          <CategoryCard category={e} key={index}/>
        ))}
      </Slider>
    </div>
  );
}

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
