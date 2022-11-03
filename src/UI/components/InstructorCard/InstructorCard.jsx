import React from "react";
import "./InstructorCard.css";

export default function InstructorCard({ instructors }) {
  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center align-items-center p-4 text-center"
        style={{ width: "12rem" }}
      >
        <img src="/assets/2.jpg" alt="instructor" className="mb-3" />
        <h6 className="fw-bold mb-3">{instructors.name}</h6>
        <p className="tx-accentColor">{instructors.title}</p>
      </div>
    </>
  );
}
