import React,{Component} from "react";
import { Button } from "react-bootstrap";
import "./map.css"
export class Map extends Component
{
    render()
    {
        return(
            <div>
         
              <div class="text-center">
              <Button className=" subBtn" variant="outline-danger">
                Browse Courses
              </Button></div>
              <div className="con">
            
        </div> 
        <div class="text-center">
        <Button className="me-4" variant="danger">
        Browse Courses
            </Button>
              </div>
           
               </div>
        );
    }
}