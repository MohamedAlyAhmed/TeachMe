import React, { useContext } from "react";
import MyButton from "../../components/Button/Button";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./CategoryPage.css";

export default function CategoryPage() {
  let { courses } = useContext(DataContext);

  return (
    <div>
      <div className="gradient-div">
        <p className="category-name mb-4">Soft Skills</p>
        <div className="bg-new-color text-secondary shadow mb-4 rounded-3 d-flex justify-content-between align-items-center p-4">
          Now for free, discover and learn with the best courses that increase
          your skills.
          <MyButton>Subscribe</MyButton>
        </div>
      </div>

      <div className=" w-100 container my-3 ">
        <div className="d-flex align-items-center ms-3 small-screen ">
          {/* Filter By  */}
          <div className="fw-bold me-3">Filter:</div>
          {/* Level Filter  */}
          <div class="dropdown me-3">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Level
            </button>
            <ul class="dropdown-menu bg-light">
              <li>
                <a class="dropdown-item" href="#">
                  General
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Specialized
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Expert
                </a>
              </li>
            </ul>
          </div>

          {/* Language Filter  */}
          <div class="dropdown me-5">
            <button
              class="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </button>
            <ul class="dropdown-menu bg-light">
              <li>
                <a class="dropdown-item" href="#">
                  Arabic
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container w-100">
        <div className="row ">
          {courses.map((course) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
