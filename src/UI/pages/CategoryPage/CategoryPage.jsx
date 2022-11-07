import React, { useContext, useState } from "react";
import MyButton from "../../components/Button/Button";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./CategoryPage.css";

export default function CategoryPage() {
  let { courses } = useContext(DataContext);

  const [courseFilter, setCourseFilter] = useState(courses);

  // Filter By ( Level & Language )
  const optionSelected = () => {
    let LevelOption = document.querySelector("#levelFilter");
    let level = LevelOption.value;

    let LanguageOption = document.querySelector("#LanguageFilter");
    let language = LanguageOption.value;

    if ((level == 1 || level == 2) && (language == 1 || language == 2)) {
      setCourseFilter(
        courses.filter((e) => e.level == level && e.courseLanguage == language)
      );
    } else if (level == 1 || level == 2) {
      setCourseFilter(courses.filter((e) => e.level == level));
    } else if (language == 1 || language == 2) {
      setCourseFilter(courses.filter((e) => e.courseLanguage == language));
    } else {
      setCourseFilter(courses);
    }
  };

  return (
    <div>
      {/* Gradient Background  */}
      <div className="gradient-div">
        <p className="category-name mb-4">Soft Skills</p>
        <div className="bg-new-color text-secondary shadow mb-4 rounded-3 d-flex justify-content-between align-items-center p-4">
          Now for free, discover and learn with the best courses that increase
          your skills.
          <MyButton>Subscribe</MyButton>
        </div>
      </div>
      {/* Option Filter  */}
      <div className=" w-100 container my-3 ">
        <div className="d-flex align-items-center ms-3 small-screen option-sm">
          {/* Filter By  */}
          <div className="fw-bold me-3">Filter by :</div>
          {/* Level options  */}
          <select
            id="levelFilter"
            className="form-select w-25 h-25 me-3 option-small"
            onChange={() => optionSelected()}
          >
            <option selected="selected">All Levels</option>
            <option value={1}>Level 1</option>
            <option value={2}>Level 2</option>
          </select>
          {/* Language options  */}
          <select
            id="LanguageFilter"
            className="form-select w-25 h-25 me-3 option-small"
            onChange={() => optionSelected()}
          >
            <option selected="selected">All languages</option>
            <option value={1}>Language 1</option>
            <option value={2}>Language 2</option>
          </select>
        </div>
      </div>
      {/* Courses Result  */}
      <div className="container w-100">
        <div className="row ">
          {courseFilter.map((e) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
              <CourseCard course={e} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
