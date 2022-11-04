import React,{Component} from "react";
import Card from "../../../Shared/Card/Card";
import { FeaturedCourses } from "../FeaturedCourses/FeaturedCourses";
import "./Picks.css"
import { FeaturedInstructors } from "../feauredInstructors/feauredInstructors";
import { Button } from "react-bootstrap";
import { HomeWrapper } from "../FeaturedCourses/FeaturedCourses";
class Picks extends Component{
render()
{
    return(
<section className="picks">
<div className="container">
    <div className="row">
<div className="col--ld-12 col-md-12 ">
    <h4>Picks</h4>
    <div className="picksHeader">
        <Button className="btn1" variant="text">Featured Courses</Button> 
               <div className="vl"></div>
               <Button className="btn1" variant="text "> Most Viewed</Button> 
               <div className="vl"></div>
               <Button className="btn1" variant="text "> New Courses</Button> 

        </div>
<HomeWrapper>
<FeaturedCourses/>
<div className="space"></div>
<div className="clearfix mt-5 mb-5">

<h4 className="float-left categoryHeader">Course Categories</h4>
        </div> 
<FeaturedCourses/>


</HomeWrapper>
    </div>  
      </div>
</div>
<div className="row">

</div>
</section> 
   )
}
}

export default Picks