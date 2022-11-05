import React from "react";
import "./InstructorCard.css";

export default function InstructorCard() {
  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center align-items-center p-4 text-center"
        style={{ width: "12rem" }}
      >
        <img src="/assets/2.jpg" alt="instructor" className="mb-3 instructor-img"/>
        <h6 className="fw-bold mb-3 instructor-name">Ayman Abou el Makarem</h6>
        <p className="tx-accentColor instructor-title">Director Of Photography And Light Designer</p>
      </div>
    </>
  );
}
