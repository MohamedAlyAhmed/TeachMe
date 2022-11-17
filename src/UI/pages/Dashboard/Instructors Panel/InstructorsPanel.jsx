import React, { useState } from "react";
import "./InstructorsPanel.css";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";
import InstructorsUpdate from "./Instructor Update/InstructorsUpdate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function InstructorsPanel() {
  const { instructors, reGetInstructors } = useContext(DataContext);

  const [name, setName] = useState("Instructor Name");
  const [description, setDescription] = useState(
    "Professor at the Faculty of Cinema"
  );
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
  );
  const [permanentLink, setPermanentLink] = useState("Ayman-Abou-elMakarem");
  const [title, setTitle] = useState("Instructor Title");

  const instructorPreview = {
    name: name,
    description: description,
    image: image,
    permanentLink: permanentLink,
    title: title,
  };

  const AddInstructor = () => {
    axios
      .post(`${BASE_URL}/instructors`, {
        name: name,
        description: description,
        image: image,
        permanentLink: permanentLink,
        title: title,
      })
      .then((response) => {
        console.log(response);
        toast.success('Instructor Added Successefully', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        reGetInstructors();
      })
      .catch((error) => {
        console.log(error);
        toast.error('Instructor Added Failed', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });

  };

  const deleteInstructor = (id) => {
    if (window.confirm("Are You Sure To Delete This Instructor ?")) {
      axios
        .delete(`${BASE_URL}/instructors/${id}`)
        .then((response) => {
          console.log(response);
          toast.success('Instructor Deleted Successefully', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error('Instructor Deleted failed', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        });
      reGetInstructors();

    } else {
      console.log("Declined");
    }
  };



  return (
    <>
      <div>
        <div className="bg-dark text-center display-6 text-light rounded">
          Instructors Panel
        </div>

        <div className="row mb-5 border shadow p-3">
          {/* Category Card Preview  */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12  d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-light bg-dark p-2 rounded mt-2">
              Add Instructor
            </h2>

            <InstructorCard instructor={instructorPreview} />

            <div className="text-primary text-center">
              PermanentLink :<br></br> {permanentLink}
            </div>
          </div>
          {/*Add Category Form*/}
          <form
            className="col-xl-9 col-lg-7 col-md-6 col-sm-12  mt-5"
            onSubmit={() => AddInstructor()}
          >
            <div className="mb-3">
              <label for="category_name" className="form-label">
                Instructor Name
              </label>
              <input
                type="text"
                className="form-control"
                id="category_name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <div className="form-text">Please Add Instructor Name</div>
            </div>
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

            <div className="w-100 d-flex">
              <div className="mb-3 w-50">
                <label for="category_name" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category_name"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="form-text">Please Add Title</div>
              </div>
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

            <button type="submit" className="btn btn-success">
              Add Instructor
            </button>
          </form>
        </div>

        <div className="bg-dark text-center display-6 text-light p-2 rounded">
          Update & Delete Instructor
        </div>

        <div className="row">
          {instructors.map((e, index) => (
            <div
              key={index}
              className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center rounded-2 flex-column my-3"
            >
              <div className="bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center">
                <InstructorCard instructor={e} />

                {/* Buttons Delete & Update  */}

                <div className="m-3 d-flex ">
                  <InstructorsUpdate instructor={e} />

                  <button
                    type="submit"
                    className="btn btn-danger mx-2 "
                    onClick={() => deleteInstructor(e.id)}
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
