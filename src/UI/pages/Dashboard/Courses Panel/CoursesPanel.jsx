import "./CoursesPanel.css";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
// import CoursesUpdate from './CoursesUpdate/CoursesUpdate';
import { toast } from "react-toastify";
import CoursesUpdate from "./CoursesUpdate/CoursesUpdate";

export default function CoursesPanel() {
  const { courses } = useContext(DataContext);
  const { instructors } = useContext(DataContext);
  // For Add Course
  const [name, setName] = useState("Course_Name");
  const [permanentLink, setPermanentLink] = useState(
    "Cinematic-Lighting-Masterclass"
  );
  const [category, setcCategory] = useState("Category_Name");
  const [level, setLevel] = useState(1);
  const [courseLanguage, setCourseLanguage] = useState(1);
  const [description, setDescription] = useState("Description of course");
  const [mentors, setmentors] = useState("Instructor_Name");
  const [duration, setDeuration] = useState(234556);
  const [numberOfLessons, setNumberOfLessons] = useState(12);
  const [image, setImage] = useState(
    "https://previews.123rf.com/images/melpomen/melpomen1509/melpomen150900104/45650274-hand-pointing-to-online-course-concept-on-light-brown-wall-background.jpg"
  );
  const instructorsNames = instructors.map((e) => {
    return e.name;
  })
  const coursePreview = {
    name: name,
    category: category,
    image: image,
    duration: duration,
    numberOfLessons: numberOfLessons,
    // mentors: mentors,
    description: description,
    courseLanguage: courseLanguage,
    level: level,
    permanentLink: permanentLink,
    mentors: [
      {
        name: mentors,
        
      }
    ]
  };
  

  const AddCourse = () => {
    axios
      .post(`${BASE_URL}/courses`, {
        name: name,
        image: image,
        // mentors: mentors,
        duration: duration,
        numberOfLessons: numberOfLessons,
        category: category,
        description: description,
        courseLanguage: courseLanguage,
        level: level,
        permanentLink: permanentLink,
        mentors: [
          {
            name: mentors,
            
          }
        ]
      })
      .then((response) => {
        console.log(response);
        toast.success("Courses Added Successefully");

      })
      .catch((error) => {
        console.log(error);
        toast.error("Courses Added Failed !");
      });

  };

  const deleteCourse = (id) => {
    if (window.confirm("Are You Sure To Delete This Course ?")) {
      axios
        .delete(`${BASE_URL}/courses/${id}`)
        .then((response) => {
          console.log(response);
          toast.success("Courses Deleted Successefully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Courses Deleted Failed !");
        });

      refreshPage();
    } else {
      console.log("Declined");
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };


  return (
    <>
      <div>
        <div className="bg-dark text-center display-6 text-light rounded">
          Courses Panel
        </div>

        <div className="row mb-5 border shadow p-3">
          {/* Course Card Preview  */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12  d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-light bg-dark p-2 rounded mt-2">Add Course</h2>

            <CourseCard course={coursePreview} />

            <div className="text-primary text-center">
              PermanentLink :<br></br> {permanentLink}
            </div>
          </div>
          {/*Add Course Form*/}
          <form
            className="col-xl-9 col-lg-7 col-md-6 col-sm-12  mt-5"
            onSubmit={() => AddCourse()}
          >
            {/*(1) name ***/}
            <div className="mb-3">
              <label for="category_name" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                className="form-control"
                id="category_name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div className="form-text">Please Add Course Name</div>
            </div>
            {/*(2) Description */}
            <div className="mb-3">
              <label for="category_name" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="category_name"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="form-text">Please Add description</div>
            </div>
            {/*(3) image*** */}
            <div className="mb-3">
              <label for="imageUrl" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                required
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="form-text">
                Like : http://www.google.com/logo.png
              </div>
            </div>
            {/* (4)Mentors */}
            <div className="w-100 d-flex">
              <div className="mb-3 w-50">
                {/* <label for="category_name" className="form-label">
                  Instructor 
                  
                </label> */}

                {/* <select  
 
 >
  <option >please select instructor</option>
{
instructorsNames.map((e)=>(
<option value={e}
  className="text-dark">
  {e}

  </option>
))}

</select> */}
                <label for="instructor">Instructor Name:</label>

                <select name="instructor" id="instructor">
                  <option >please select instructor</option>

                  {
                    instructorsNames.map((e) =>
                      <option value={e}>
                        {e}
                      </option>



                    )}

                </select>

                {/* <input
                  type="text"
                  className="form-control"
                  id="category_name"
                  required
                  onChange={(e) => setmentors(e.target.value)}
                /> */}
                <div className="form-text">Please Add Instructor</div>
              </div>
              {/* (5) Permanent Link */}
              <div className="mb-3 w-50 ms-3">
                <label for="permanentLink" className="form-label">
                  Permanent Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="permanentLink"
                  required
                  onChange={(e) => setPermanentLink(e.target.value)}
                />
                <div className="form-text">Like : Ayman-Ahmed</div>
              </div>
            </div>
            
            {/*(7) Level */}
            <div className="mb-3">
              <label for="permanentLink" className="form-label">
                Level
              </label>
              <input
                type="number"
                className="form-control"
                id="permanentLink"
                required
                onChange={(e) => setLevel(parseInt(e.target.value))}
              />
              <div className="form-text">Like : 1</div>
            </div>
            {/*(8) Number of lessons */}
            <div className="mb-3">
              <label for="permanentLink" className="form-label">
                Number of Lessons
              </label>
              <input
                type="number"
                className="form-control"
                id="permanentLink"
                required
                onChange={(e) => setNumberOfLessons(parseInt(e.target.value))}
              />
              <div className="form-text">Like : 1</div>
            </div>
            {/*(9) Deuration */}
            <div className="mb-3">
              <label for="permanentLink" className="form-label">
                Deuration
              </label>
              <input
                type="number"
                className="form-control"
                id="permanentLink"
                required
                onChange={(e) => setDeuration(parseInt(e.target.value))}
              />
              <div className="form-text">Like : 1</div>
            </div>
            {/*(10) Course Language */}
            <div className="mb-3">
              <label for="category_name" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="category_name"
                required
                onChange={(e) => setCourseLanguage(e.target.value)}
              />
              <div className="form-text">Please Add Course Language</div>
            </div>
            {/*(11) Categoty */}

            <div className="mb-3">
              <label for="category" className="form-label">
                Categoty
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                required
                onChange={(e) => setcCategory(e.target.value)}
              />
              <div className="form-text">Like : Soft-Skills</div>
            </div>
            <button type="submit" className="btn btn-success">
              Add Course
            </button>
          </form>
        </div>

        <div className="bg-dark text-center display-6 text-light p-2 rounded">
          Update & Delete Instructor
        </div>

        <div className="row">
          {courses.map((e, index) => (
            <div
              key={index}
              className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center rounded-2 flex-column my-3"
            >
              <div className="bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center">
                <CourseCard course={e} />

                {/* Buttons Delete & Update  */}

                <div className="m-3 d-flex ">
                  <CoursesUpdate course={e} />

                  <button
                    type="submit"
                    className="btn btn-danger mx-2 "
                    onClick={() => deleteCourse(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </>

  );
}
