import "./InstructorPage.css";
import { Card } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../DataContext";
import axios from "axios";


export const InstructorPage = () => {
  document.title = `Instructor`;
  let { mainUserId } = useParams();
  const [instructor, setInstructor] = useState({});
  // *****
   const { courses } = useContext(DataContext);
  // const { instructor } = useParams();

  // const coursesInstructor = courses.filter((e) => e.courseIds == instructor);
  // const [courseFilter, setCourseFilter] = useState(coursesInstructor);

  // ****

  useEffect(() => {
    axios.get(`${BASE_URL}/instructors/${mainUserId}`).then((instructors) => {
      setInstructor(instructors.data);
    });
  }, []);

  return (
    <>
      <div className="myontainer1">
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
                  <i class="fa-solid fa-eye"></i>
                </div>
                <Card.Title> Views </Card.Title>
              </div>
              <h5>2,324</h5>
            </div>
            <div className="myrow">
              <div className="viewRow">
                <div className="icon2">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>

                <Card.Title> Learners </Card.Title>
              </div>
              <h5>5,400</h5>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* *** */}
          <div className="bg-new-color text-secondary shadow mb-4 rounded-3 d-flex justify-content-between align-items-center p-4 infotmation">
          <h3 className="category-name mb-4 Aboutheader ">About Mentor</h3>

          {instructor.description}
          </div>
          

      <div className="container w-100">
          <div className="row ">
            {courses.map((e) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
                <CourseCard course={e} />
              </div>
            ))}
          </div>
        </div>
    </>
  );
};
