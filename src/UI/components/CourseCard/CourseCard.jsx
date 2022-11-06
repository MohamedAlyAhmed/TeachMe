import React from "react";
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
      <div
        className="card shadow-sm rounded-3 m-3"
        style={{ width: "14rem", height: "14rem" }}
      >
        <img src={course.image} className="card-img-top " alt="course image" />
        <div className="card-body position-relative">
          <div className=" text-light duration d-flex ">
            <div className="mx-1">
              <i class="fa-regular fa-clock"></i>
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
    </div>
  );
}
