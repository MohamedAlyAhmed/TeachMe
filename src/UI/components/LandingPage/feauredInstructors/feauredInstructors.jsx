import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../../Shared/Card/Card";
import "./feauredInstructors.css"
import { Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"
import CirculeCard from "../../../Shared/circleCard/circleCard";

export  class FeaturedInstructors extends Component {
  
  render() {
    const settings = {
      dots:false,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      
    };
    return (
      <div>
        
       
        <Slider {...settings}>
       
        <CirculeCard/>
        <CirculeCard/>
        <CirculeCard/>
        <CirculeCard/>
        <CirculeCard/>
        <CirculeCard/>
        <CirculeCard/>
        
        
        </Slider>
      </div>
    );
  }
}

export  const HomeWrapper=styled.div`

.slick-arrow
{
  background-color:#979A9A;
  height:220px;
  width:30px

}
`
;