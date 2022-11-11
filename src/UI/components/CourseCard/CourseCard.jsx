import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

export default function CourseCard({ course }) {
  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
    return hDisplay + mDisplay;
  }
  return (
    <div>
      <Link
        to={`/course/${course.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="card shadow-sm rounded-3 m-3"
          style={{ width: "14.5rem", height: "16rem" }}
        >
          <img
            src={course.image}
            className="card-img-top course-image"
            alt="course image"
          />
          <div className="card-body position-relative">
            <div className=" text-light duration d-flex ">
              <div className="mx-1">
                <i className="fa-regular fa-clock"></i>
              </div>
              {secondsToHms(course.duration)} / {course.numberOfLessons} lessons
            </div>
            <p className="card-title mb-2 fw-bold">{course.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p
                className="card-text align-self-center mb-0 text-secondary instructor_name"
                style={{ fontSize: 14 }}
              >
                {course.mentors[0].name}
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
      </Link>
    </div>
  );
}
