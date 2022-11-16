import React from "react";
import "./mycourses.css";
import { DataContext } from "../../../DataContext";
import { useContext } from "react";
import CourseCard from "../CourseCard/CourseCard";

export default function MyCourses() {
  const { myEnrollsCourses, courses } = useContext(DataContext);
  let CoursesFilter = [];
  myEnrollsCourses.map((e) => {
    let enrollCourses = courses.filter((course) => course.id == e.course_id);
    CoursesFilter.push(...enrollCourses);
  });

  return (
    <div>
      <div className="my-courses container-lg">
        {CoursesFilter.length > 0 ? (
          <>
            <h2>My Courses</h2>
            <div className="courses">
              <div className="container w-100">
                <div className="row ">
                  {CoursesFilter.map((e, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 small-screen"
                    >
                      <CourseCard course={e} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="empty-section">
              <h2 className="page-title"> My Courses </h2>
              <div className="empty-section_main">
                <div className="empty-img">
                  <img
                    className="w-100"
                    src="assets/noCertificates.png"
                    alt=""
                  />
                </div>
                <p className="empty-section-title">
                  You do not have any courses
                </p>
                <p className="empty-section-subtitle">
                  Start a new course to be able to track it here.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
