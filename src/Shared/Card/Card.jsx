import React, { useState } from "react";
import "./Card.css";

export default function Card() {
  let [courseImg, setCourseImg] = useState("/assets/html5.jpg");
  let [title, setTitle] = useState("HTML5");
  let [hour, setHour] = useState(12);
  let [minutes, setMinutes] = useState(12);
  let [lessons, setLessons] = useState(17);
  let [instructorName, setInstructorName] = useState("Instructor Name");

  return (
    <div>
      <div className="card shadow-sm" style={{ width: "14rem" }}>
        <img src={courseImg} className="card-img-top " alt="course image" />
        <div className="card-body position-relative">
          <div className=" text-light duration animate__fadeInRightBig">
            {hour}h {minutes}min / {lessons} lessons
          </div>
          <h5 className="card-title mb-4">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p
              className="card-text align-self-center mb-0 text-secondary"
              style={{ fontSize: 14 }}
            >
              {instructorName}
            </p>
            <button className="btn btn-light">
              <i
                className="fa-light fa-bookmark text-dark"
                title="Save for later"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
