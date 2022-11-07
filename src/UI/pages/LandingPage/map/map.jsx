import { Button } from "react-bootstrap";
import "./map.css"
import MyButton from "../../../components/Button/Button";
import React,{Fragment,useState} from 'react'
import ReactVisibilitySensor from "react-visibility-sensor";
// import CountUp from 'react-countup';

function Counter() {
  return (
    <div >
      <div style={{fontSize:'150px' }}>
        {/* <CountUp
          start={3000000}
          end={3453140}
          duration={6}
          
          separator=","
        />     */}
      </div>
    </div>
  );
}


export function Map  ()
{
   
        return(
            <div>
         
              <div class="text-center mt-5">
              <MyButton isOutline={true} >
                Browse Courses
              </MyButton></div>

          <header className="myHeader">
         
        <div className="header-overlay">
        <div className="myCounter">  
              <Counter/>
</div>
       
          <div className="container">
            <div className="row">
              <div className="  col-lg-12 background head">

<h1>Learning experiences worldwide.</h1>

                <h2>& counting...</h2>
                <span className="marker1"> </span>
                <span className="marker2"> </span>
                <span className="marker3"> </span>
                <span className="marker4"> </span>
                <span className="marker5"> </span>
                <span className="marker6"> </span>
                <span className="marker7"> </span>
                <span className="marker8"> </span>
              </div>
            </div>
          </div>
        </div>
      </header>
       
           
               </div>
        );
    
}