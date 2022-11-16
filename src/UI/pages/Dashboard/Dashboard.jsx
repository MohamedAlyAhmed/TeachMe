import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  document.title = 'DASHBOARD';
  return (
    <div>
      <div className="dashboard_header text-danger p-4 display-6 text-center">
      <i class="fa-solid fa-gear"></i>  Welcome To Dashboard 
      </div>
      <div className="area">
        <Outlet></Outlet>
      </div>
      <nav className="main-menu shadow">
        <ul>
          <li>
            <Link to="home">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="courses_panel">
              <i className="fa fa-2x fa-solid fa-book"></i>
              <span className="nav-text">Courses Panel</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="category_panel">
              <i className=" fa fa-2x fa-solid fa-list"></i>
              <span className="nav-text">Categories Panel</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="instructors_panel">
              <i className="fa-2x fa fa-solid fa-person-chalkboard"></i>
              <span className="nav-text">Instructors Panel</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
