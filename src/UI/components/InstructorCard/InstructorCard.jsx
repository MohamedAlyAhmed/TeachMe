import React from "react";
import "./InstructorCard.css";
import { Link } from "react-router-dom";
export default function InstructorCard({instructor}) {
  return (
    <div>
          <Link to={`/instructor/${instructor.id}`} style={{ color: "black" }}>

      <div
        className=" d-flex flex-column justify-content-center align-items-center p-4 text-center"
        style={{ width: "12rem" }}
      >
        <img src={instructor.image} alt="instructor" className="mb-3 instructor-img"/>
        <h6 className="fw-bold mb-3 instructor-name">{instructor.name}</h6>
        <p className="tx-accentColor instructor-title">{instructor.title}</p>
      </div>
       </Link>
    </div>
  );
}
