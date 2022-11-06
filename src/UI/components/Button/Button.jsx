import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css"

const MyButton = ({ onClick, isOutline = false, children }) => {


  return (
    <Button 
      className={isOutline ? "outlineBtn" : "solidBtn"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MyButton;
