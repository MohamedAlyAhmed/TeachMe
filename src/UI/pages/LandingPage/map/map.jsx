import React,{Component} from "react";
import { Button } from "react-bootstrap";
import "./map.css"
import MyButton from "../../../components/Button/Button";
export class Map extends Component
{
    render()
    {
        return(
            <div>
         
              <div class="text-center mt-5">
              <MyButton isOutline={true} >
                Browse Courses
              </MyButton></div>
              <div className="mapImg">
            
        </div> 
        <div class="text-center">
        <MyButton >
        Browse Courses
            </MyButton>
              </div>
           
               </div>
        );
    }
}