import "./InstructorsPage.css";
import MyButton from "../../components/Button/Button";

import InstructorCard from "../../components/InstructorCard/InstructorCard";

import React, { useContext } from "react";
import { DataContext } from "../../../DataContext";

export const InstructorsPage = () => {
  let { instructors } = useContext(DataContext);
  return (
    <div>
      <div className="gradient-div1">
        <h2 className="category-header mb-4">Instructors</h2>
      </div>

      <div className="container w-100">
        <div className="row ">
          {instructors.map((e) => (
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 small-screen">
              <InstructorCard instructor={e} />
            </div>
          ))}
        </div>
      </div>

        <div className="text myDiv text-secondary shadow mb-4 rounded-3 d-flex  align-items-center p-4">
        <h2>Want To Become an Instructor?</h2>
          <MyButton >Apply now</MyButton>
        </div>
    </div>
  );
};
