import "./CoursesPanel.css";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import CoursesUpdate from "./CoursesUpdate/CoursesUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CoursesPanel() {
  const { courses, reGetCourses } = useContext(DataContext);
  const { instructors, categories } = useContext(DataContext);

  // For Add Course
  const [name, setName] = useState("Course_Name");
  const [permanentLink, setPermanentLink] = useState(
    "Cinematic-Lighting-Masterclass"
  );
  const [category, setcCategory] = useState("Category_Name");
  const [level, setLevel] = useState(1);
  const [releasedAt, setReleasedAt] = useState("Release_Date");
  const [courseLanguage, setCourseLanguage] = useState(1);
  const [description, setDescription] = useState("Description of course");
  const [mentors, setmentors] = useState({ name: "instructor_name" });
  const [categoryName, setCategoryName] = useState("Category_Name");
  const [duration, setDeuration] = useState(234556);
  const [numberOfLessons, setNumberOfLessons] = useState(12);

  const [image, setImage] = useState(
    "https://previews.123rf.com/images/melpomen/melpomen1509/melpomen150900104/45650274-hand-pointing-to-online-course-concept-on-light-brown-wall-background.jpg"
  );

  const instructorsNames = instructors.map((e, index) => {
    return <p key={index}>{e.name}</p>;
  });

  const onChangeMentor = (e) => {
    const selectedId = e.target.value;
    const selectedMentorName = instructors.filter((e) => e.id == selectedId)[0];
    setmentors(selectedMentorName);
  };

  const categoriesNames = categories.map((e, index) => {
    return <p key={index}>{e.name}</p>;
  });

  const onChangeCategory = (e) => {
    const selectedId = e.target.value;
    const categoriesN = categories.filter((e) => e.id == selectedId)[0]
      .permanentLink;
    setcCategory(categoriesN);
  };

  const coursePreview = {
    name: name,
    category: category,
    releasedAt: releasedAt,
    image: image,
    duration: duration,
    numberOfLessons: numberOfLessons,
    description: description,
    courseLanguage: courseLanguage,
    level: level,
    permanentLink: permanentLink,
    mentors: [mentors],
  };

  const AddCourse = () => {
    axios
      .post(`${BASE_URL}/courses`, {
        name: name,
        image: image,
        duration: duration,
        numberOfLessons: numberOfLessons,
        category: category,
        description: description,
        courseLanguage: courseLanguage,
        level: level,
        permanentLink: permanentLink,
        releasedAt: releasedAt,
        mentors: [mentors],
        learningOutcomes: [
          {
            id: 4940,
            body: "All about the history of old and modern cinematic lighting, the role of photography director and the cinematic lighting steps you can follow to get a special cinematic work.",
            cellSpan: 1,
            isImage: false,
            order: 1,
          },
        ],
      })
      .then((response) => {
        toast.success("Courses Added Successefully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log(response);
        reGetCourses();

      })
      .catch((error) => {
        console.log(error);
        toast.error("Courses Added Failed !", {
          position: toast.POSITION.BOTTOM_RIGHT,

        });
      });


  };

  const deleteCourse = (id) => {
    if (window.confirm("Are You Sure To Delete This Course ?")) {
      axios
        .delete(`${BASE_URL}/courses/${id}`)
        .then((response) => {
          console.log(response);
          toast.success("Courses Deleted Successefully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          reGetCourses();
        })
        .catch((error) => {
          console.log(error);
          toast.error("Courses Deleted Failed !", {
            position: toast.POSITION.BOTTOM_RIGHT,

          });
        });
    } else {
      console.log("Declined");
    }


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
                <label for="instructor">Instructor Name:</label>

                <select
                  options={instructorsNames}
                  className="form-select mt-2"
                  name="instructor"
                  id="instructor"
                  onChange={(e) => {
                    onChangeMentor(e);
                  }}
                >
                  {instructors.map((e) => (
                    <option value={e.id} key={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
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
                <div className="form-text">
                  Like : Parents-back-to-school-guide
                </div>
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
              <div className="form-text">Like : 26</div>
            </div>
            {/*(9) Deuration */}
            <div className="mb-3">
              <label for="permanentLink" className="form-label">
                Duration
              </label>
              <input
                type="number"
                className="form-control"
                id="permanentLink"
                required
                onChange={(e) => setDeuration(parseInt(e.target.value))}
              />
              <div className="form-text">Number of seconds</div>
            </div>
            {/*(10) Course Language */}
            <div className="mb-3">
              <label for="category_name" className="form-label">
                Course Language
              </label>
              <input
                type="number"
                className="form-control"
                id="category_name"
                required
                onChange={(e) => setCourseLanguage(parseInt(e.target.value))}
              />
              <div className="form-text">Please Add Course Language</div>
            </div>
            {/*(11) Date */}
            <div className="mb-3">
              <label for="permanentLink" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control"
                id="permanentLink"
                required
                onChange={(e) => setReleasedAt(new Date(e.target.value))}
              />
              <div className="form-text">Like :Sat Dec 30 2017</div>
            </div>
            {/*(12) Categoty */}

            <div className="mb-3 w-50">
              <label for="instructor">Category Name:</label>

              <select
                options={categoriesNames}
                className="form-select mt-2"
                name="instructor"
                id="instructor"
                onChange={(e) => {
                  onChangeCategory(e);
                }}
              >
                {categories.map((e) => (
                  <option value={e.id} key={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
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
      <ToastContainer />
    </>
  );
}
