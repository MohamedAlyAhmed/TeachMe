import "./InstructorPage.css";
import { Card } from "react-bootstrap";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import Picks from "../LandingPage/Picks/Picks";
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../DataContext";
import axios from "axios";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export const InstructorPage = () => {
  document.title = `Instructor`;

  const { instructors } = useContext(DataContext);

  let { mainUserId } = useParams();
  const [instructor, setInstructor] = useState({});
  const [instractorCourses, setInstractorCourses] = useState([]);
  // *****
  const { courses } = useContext(DataContext);
  //  const { instructor } = useParams();

  // const [courseFilter, setCourseFilter] = useState(coursesInstructor);

  // ****

  useEffect(() => {
    axios.get(`${BASE_URL}/instructors/${mainUserId}`).then((instructors) => {
      setInstructor(instructors.data);

      let res = [];

      for (let i = 0; i < instructors.data.courseIds.length; i++) {
        const theID = instructors.data.courseIds[i];
        console.log(theID);
        console.log(courses.length);
        for (let x = 0; x < courses.length; x++) {
          console.log(courses[x].id);
          if (courses[x].id == theID) {
            res.push(courses[x]);
          }
        }
        console.log("====================================");
      }
      setInstractorCourses(res);
    });
  }, []);

  return (
    <>
      <div className="myontainer1 ">
        <div className="item">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="mb-3 instructor-img"
          />
          <h4 className="fw-bold mb-3 ">{instructor.name}</h4>
          <p className="tx-accentColor ">{instructor.title}</p>
        </div>
        <Card
          className="cardInfo mb-2"
          style={{ width: "20rem", height: "13rem" }}
        >
          <Card.Body>
            <div className="myrow">
              <div className="viewRow">
                <div className="icon1">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <Card.Title> Views </Card.Title>
              </div>
              <h5>2,324</h5>
            </div>
            <div className="myrow">
              <div className="viewRow">
                <div className="icon2">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>

                <Card.Title> Learners </Card.Title>
              </div>
              <h5>5,400</h5>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* *** */}
      <div
        className="myontainer2 "
        style={{ marginLeft: "7rem", marginRight: "7rem" }}
      >
        <h4 className="fw-bold text-center mb-3">About Mentor</h4>

        <div className="bg-new-color text-secondary shadow mb-4 rounded-3 d-flex justify-content-between align-items-center p-4">
          {instructor.description}
        </div>
      </div>

      <div className="container w-100">
        <div className="row ">
          {instractorCourses.map((e) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
              <CourseCard course={e} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
