import React, { useState } from "react";
import "./CategoryPanel.css";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import CategoryUpdate from "./Category update/CategoryUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CategoryPanel() {
  const { categories, reGetCategories } = useContext(DataContext);
  // For Add Category
  const [name, setName] = useState("Category Name");
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
  );
  const [permanentLink, setPermanentLink] = useState("New-Category");

  const categoryPreview = {
    name: name,
    image: image,
    permanentLink: permanentLink,
  };

  const AddCategory = () => {
    axios
      .post(`${BASE_URL}/CourseCategories`, {
        name: name,
        image: image,
        permanentLink: permanentLink,
      })
      .then((response) => {
        console.log(response);
        toast.success("Category Added Successefully", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        reGetCategories();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Category Added Failed", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });

  };

  const deleteCategory = (id) => {
    if (window.confirm("Are You Sure To Delete This Category ?")) {
      axios
        .delete(`${BASE_URL}/CourseCategories/${id}`)
        .then((response) => {
          console.log(response);
          toast.success("Category Deleted Successefully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Category Deleted Failed", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });

      reGetCategories();
    } else {
      console.log("Declined");
    }
  };

  return (
    <div>
      <div className="bg-dark text-center display-6 text-light rounded">
        Categories Panel
      </div>

      <div className="row mb-5 border shadow p-5">
        {/* Category Card Preview  */}

        <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12  d-flex justify-content-center flex-column align-items-center">
          <h2 className="text-light bg-dark p-2 rounded mt-2">Add Category</h2>
          <CategoryCard category={categoryPreview} />
          <div className="text-primary">PermanentLink : {permanentLink}</div>
        </div>

        {/*Add Category Form*/}
        <form
          className="col-xl-9 col-lg-7 col-md-6 col-sm-12  mt-5"
          onSubmit={() => AddCategory()}
        >
          <div className="mb-3">
            <label for="category_name" className="form-label">
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="category_name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <div className="form-text">Please Add Unique Name</div>
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
          <div className="mb-3">
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
            <div className="form-text">Like : Art-&-Design</div>
          </div>

          <button type="submit" className="btn btn-success">
            Add Category
          </button>
        </form>
      </div>

      <div className="bg-dark text-center display-6 text-light p-2 rounded">
        Update & Delete Categories
      </div>

      <div className="row">
        {categories.map((e, index) => (
          <div
            key={index}
            className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center rounded-2 flex-column my-3"
          >
            <div className="bg-light p-2 rounded d-flex flex-column justify-content-center align-items-center">
              <CategoryCard category={e} />

              {/* Buttons Delete & Update  */}
              <div className="m-3 d-flex ">
                <CategoryUpdate category={e} />

                <button
                  type="submit"
                  className="btn btn-danger mx-2 "
                  onClick={() => deleteCategory(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
