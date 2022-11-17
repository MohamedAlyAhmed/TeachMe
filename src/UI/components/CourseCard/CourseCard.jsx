import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../../DataContext';
import axios from 'axios';
import { BASE_URL } from '../../../DataContext';

export default function CourseCard({ course }) {

  let [courses, setCourses] = useState([]);
  let { userData,
    mySaveCourses,
    setSaveCoursesWithUserID,
  } = useContext(DataContext)
  const navigate = useNavigate();



  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
    return hDisplay + mDisplay;
  }

  const onClickEnroll = () => {
    if (!userData) {
      navigate(`/login`);
      return;
    }
    axios.post(`${BASE_URL}/savedList`, {
      "user_id": userData._id,
      "course_id": course.id,
      "date": new Date().toISOString(),
      "progress": 0
    }).then(() => {
      setSaveCoursesWithUserID();
    });
    console.log(course.id)
  }

  const isCourseEnroled = () => {
    for (let i = 0; i < mySaveCourses.length; i++) {
      if (course.id == mySaveCourses[i].course_id) {
        return true;

      }
    }
    return false;
  }

  const deleteSaved = () => {

    let current = mySaveCourses.filter((e) =>
      e.course_id == course.id
    )
    console.log(current[0].id);
    axios.delete(`${BASE_URL}/savedList/${current[0].id}`)
    

  }


  return (
    <div>
      <div
        className="card shadow-sm rounded-3 m-3"
        style={{ width: "14.5rem", height: "16rem" }}
      >
        <Link to={`/course/${course.id}`} style={{ textDecoration: "none", color: "black" }}>
          <img
            src={course.image}
            className="card-img-top course-image"
            alt="course image"
          />
        </Link>
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
            <Link >
              <button
                onClick={isCourseEnroled() ? deleteSaved : onClickEnroll}
                className="btn btn-light rounded-5 border"
                title="Save for later"
              >
                {isCourseEnroled() ? <i class="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}

              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
