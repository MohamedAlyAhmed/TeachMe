import React from "react";
import { Button } from "react-bootstrap";  
const MyButton = ({styleClass,value,onclick}) => {
   
    return (
       <button className={`btn ${styleClass}`} onClick={onclick}>

{value}
       </button>
    );
};
  
export default MyButton;