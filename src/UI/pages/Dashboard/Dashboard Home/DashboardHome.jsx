import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../DataContext";
import "./DashboardHome.css";

export default function DashboardHome() {
  const { courses } = useContext(DataContext);
  const { categories } = useContext(DataContext);
  const { instructors } = useContext(DataContext);
  const { users } = useContext(DataContext);

  return (
    <div
      className=" d-flex justify-content-between align-items-center flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column"
      style={{ margin: "12rem 0" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body bg-success text-white rounded p-4">
          <h5 className="card-title display-6">Courses</h5>
          <h6 className="card-text">
            Now We Have{" "}
            <span className="fw-bold fs-3 text-warning">{courses.length}</span>{" "}
            Course
          </h6>
          <div className="mt-3">
            <Link to="/dashboard/courses_panel" className="btn btn-light">
              Courses Panel
            </Link>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body bg-dark text-white rounded p-4">
          <h5 className="card-title display-6">Categories</h5>
          <h6 className="card-text">
            Now We Have{" "}
            <span className="fw-bold fs-3 text-warning">
              {categories.length}
            </span>{" "}
            Category
          </h6>
          <div className="mt-3">
            <Link to="/dashboard/category_panel" className="btn btn-light">
              Categories Panel
            </Link>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body bg-success text-white rounded p-4">
          <h5 className="card-title display-6">Instructors</h5>
          <h6 className="card-text">
            Now We Have{" "}
            <span className="fw-bold fs-3 text-warning">
              {instructors.length}
            </span>{" "}
            Instructor
          </h6>
          <div className="mt-3">
            <Link to="/dashboard/instructors_panel" className="btn btn-light">
              Instructors Panel
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}
