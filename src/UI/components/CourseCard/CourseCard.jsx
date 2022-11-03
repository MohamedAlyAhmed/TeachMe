import React from "react";
import "./CourseCard.css";

export default function CourseCard({ courses }) {
  return (
    <div>
      <div className="card shadow-sm rounded-3" style={{ width: "15rem" }}>
        <img src={courses.image} className="card-img-top " alt="course image" />
        <div className="card-body position-relative">
          <div className=" text-light duration animate__fadeInRightBig">
            {courses.hour}h {courses.minutes}min / {courses.lessons}lessons
          </div>
          <p className="card-title mb-2 fw-bold">{courses.name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p
              className="card-text align-self-center mb-0 text-secondary"
              style={{ fontSize: 14 }}
            >
              {courses.instructor.name}
            </p>
            <button
              className="btn btn-light rounded-5 border"
              title="Save for later"
            >
              <i className="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
