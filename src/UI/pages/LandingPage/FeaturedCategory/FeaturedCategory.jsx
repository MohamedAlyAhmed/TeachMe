import React, { Component } from 'react'
import Slider from "react-slick";
import styled from "styled-components";
import './FeaturedCategory.css'
import CategoryCard from "../../../components/CategoryCard/CategoryCard";

export default class FeaturedCategory extends Component {
    
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
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </Slider>
          </div>
        );
      }
    }
    
    export const HomeWrapper = styled.div`
      .slick-arrow {
        background-color: #f3f1f1;
        height: 220px;
        width: 30px;
      }
    `;


