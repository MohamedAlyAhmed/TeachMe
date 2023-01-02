import React, { useContext, useState } from "react";
import MyButton from "../../components/Button/Button";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./CategoryPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function CategoryPage() {


  // search
  const [query, setQuery] = useState([]);
  const [coursess, setCourses] = useState(null);

  useEffect(()=>{
   fetch("https://teachme-iti.glitch.me/courses").
   then(response=>{
     console.log(response.ok);
 if (!response.ok) {
   throw Error("can't connect to server");

 }
 return response.json();
   }).then(data=>{
     setCourses(data);
   }).catch(e=>{
     console.log(e.message);
   });
  },[]);
  // **
  const { courses } = useContext(DataContext);
  const { category } = useParams();
  //For Page Title
  if (category !== undefined) {
    document.title = `${category}`;
  } else {
    document.title = `All Courses`;
  }

  const coursesCategory = courses.filter((e) => e.category == category);
  const [courseFilter, setCourseFilter] = useState(coursesCategory);

  // Filter By ( Level & Language )
  const optionSelected = () => {
    let level = document.querySelector("#levelFilter").value;
    let language = document.querySelector("#LanguageFilter").value;

    let finalRes = coursesCategory;

    if (level != 0) {
      finalRes = finalRes.filter((e) => e.level == level);
    }

    if (language != 0) {
      finalRes = finalRes.filter((e) => e.courseLanguage == language);
    }

    setCourseFilter(finalRes);
  };

  return (
   
    <>
      {category !== undefined ? (
        <div>
          {/* Gradient Background  */}
          <div className="gradient-div">
            <p className="category-name mb-4">{category}</p>
            <div className="bg-new-color text-secondary shadow mb-4 rounded-3 d-flex justify-content-between align-items-center p-4">
              Now for free, discover and learn with the best courses that
              increase your skills.
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
                <option value={0} selected="selected">
                  All Levels
                </option>
                <option value={1}>General</option>
                <option value={2}>Specialized</option>
              </select>
              {/* Language options  */}
              <select
                id="LanguageFilter"
                className="form-select w-25 h-25 me-3 option-small"
                onChange={() => optionSelected()}
              >
                <option value={0} selected="selected">
                  All languages
                </option>
                <option value={1}>English</option>
                <option value={2}>Arabic</option>
              </select>
            </div>
          </div>
          {/* Courses Result  */}
          <div className="container w-100">
            <div className="row ">
              {courseFilter.map((e , index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
                  <CourseCard course={e} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
       
       
          //All Courses Cards
      <div>
        {/* Gradient Background  */}
        <div className="gradient-div1">
          {/* <p className="category-name mb-4">All Courses</p> */}
        </div>
        {/* **search */}

        <div className="container w-100">
      <div className="row ">
      <form className="form ms-5 ">

<div className="main ">
<input
  type="text"
  name=""
  placeholder="search courses ,topics .."
  onChange={event=>setQuery(event.target.value)}

/>


</div>
</form>
<br />
       
        {
courses &&(
courses.filter(course=>{
if (query==="") {
return course;
}
else if(course.name.toString().toLowerCase().includes(query.toString().toLowerCase() )||
course.category.toString().toLowerCase().includes(query.toString().toLowerCase() )
)
{
return course;
}

}).map((e) => (
  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 small-screen">
    <CourseCard course={e} />
  </div>
))
)
        }
      </div>
    </div>
      
      </div>
    )}
  </>
  );
}
