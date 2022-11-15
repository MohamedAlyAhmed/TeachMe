

import "./Search.css"
import CourseCard from '../CourseCard/CourseCard'
import React, { useContext } from "react";
import { DataContext } from '../../../DataContext'
import { useState, useEffect } from "react";

export default function Search() {
  // let { courses } = useContext(DataContext);

  const [query, setQuery] = useState([]);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/courses").
      then(response => {
        console.log(response.ok);
        if (!response.ok) {
          throw Error("can't connect to server");

        }
        return response.json();
      }).then(data => {
        setCourses(data);
      }).catch(e => {
        console.log(e.message);
      });
  }, []);

  return (

    <div>

      <div className="gradient-div1">
      </div>
      <br />



      <div className="container w-100">
        <div className="row ">
          <form className="form ms-5 ">

            <div className="main">
              <input
                type="text"
                name=""
                placeholder="search courses ,topics .."
                onChange={event => setQuery(event.target.value)}

              />


            </div>
          </form>
          <br />

          {
            courses && (
              courses.filter(course => {
                if (query === "") {
                  return course;
                }
                else if (course.name.toString().toLowerCase().includes(query.toString().toLowerCase()) ||
                  course.category.toString().toLowerCase().includes(query.toString().toLowerCase())
                ) {
                  return course;
                }
              }).map((e, i) => (
                <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 small-screen">
                  <CourseCard course={e} />
                </div>
              ))
            )
          }
        </div>
      </div>


    </div>
  );

}

