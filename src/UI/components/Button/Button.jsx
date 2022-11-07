import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css"

const MyButton = ({ onClick, isOutline = false, children, fillWidth = false }) => {


  return (
    <Button
      className={`${isOutline ? "outlineBtn" : "solidBtn"} ${fillWidth ? 'w-100' : ''}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MyButton;
