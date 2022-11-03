import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

export default function CategoryCard({ CourseCategories }) {
  return (
    <div>
      <div className="card m-2 gradient" style={{ width: "14rem" }}>
        <Link to={CourseCategories.permanentLink}>
          <img
            src={CourseCategories.image}
            className="card-img-top head-text"
            alt="Category"
            style={{ height: "8rem" }}
          />
          <div className="text-on-image gradient d-flex align-items-center justify-content-center rounded-2">
            <h5 className="text-white mx-5 text-center">
              {CourseCategories.name}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
