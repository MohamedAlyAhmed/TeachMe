import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

export default function CategoryCard({ category }) {
  return (
    <div>
      <Link to={`/category/${category.permanentLink}`}>
      <div className="card m-2" style={{ width: "15rem" }}>
        <div className="linear-grad ">
          <img
            src={category.image}
            className="card-img-top head-text"
            alt="Category"
            style={{ height: "8rem" }}
          />
        </div>
        <div className="text-on-image gradient d-flex align-items-center justify-content-center rounded-2">
          <h5 className="text-white mx-5 text-center">{category.name}</h5>
        </div>
      </div>
      </Link>
    </div>
  );
}
