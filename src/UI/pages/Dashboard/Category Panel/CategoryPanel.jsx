import React, { useState } from "react";
import "./CategoryPanel.css";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import CategoryUpdate from "./Category update/CategoryUpdate";

export default function CategoryPanel() {
  const { categories } = useContext(DataContext);

  // For Add Category
  const [name, setName] = useState("Add New");
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
  );
  const [permanentLink, setPermanentLink] = useState("New-Category");

  // For Update Category
  const [updatedName, setUpdatedName] = useState("update New");
  const [updatedImg, setUpdatedImg] = useState(
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
  );
  const [updatedLink, setUpdatedLink] = useState("updated-Category");

  const updatedPreview = {
    name: updatedName,
    image: updatedImg,
    permanentLink: updatedLink,
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCategory = (id) => {
    axios
      .delete(`${BASE_URL}/CourseCategories/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    refreshPage();
  };

  const updateCategory = (id) => {
    axios
      .put(`${BASE_URL}/CourseCategories/${id}`, {
        name: updatedName,
        image: updatedImg,
        permanentLink: updatedLink,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    refreshPage();
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="bg-dark text-center display-6 text-light rounded">
        Category Panel
      </div>
      <div className="bg-dark text-center display-6 text-light p-2 mt-2 rounded">
        Now We Have{" "}
        <span className="bg-success p-2 rounded"> {categories.length}</span>{" "}
        Categories
      </div>

      <div className="row mb-5 border shadow p-5">
        {/* Category Card Preview  */}
        <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12  d-flex justify-content-center flex-column align-items-center">
          <h2 className="text-light bg-dark p-2 rounded mt-2">Add Category</h2>

          <div className="card m-2" style={{ width: "14rem" }}>
            <div className="linear-grad ">
              <img
                src={image}
                className="card-img-top head-text"
                alt="Category"
                style={{ height: "8rem" }}
              />
            </div>
            <div className="text-on-image gradient d-flex align-items-center justify-content-center rounded-2">
              <h5 className="text-white mx-5 text-center">{name}</h5>
            </div>
          </div>
          <div className="text-primary">PermanentLink : {permanentLink}</div>
          <h5>Category Card Preview</h5>
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

          <button type="submit" className="btn btn-danger">
            Add Category
          </button>
        </form>
      </div>

      <div className="bg-dark text-center display-6 text-light p-2 rounded">
        Update & Delete Categories
      </div>

      <div className="row">
        {categories.map((e, index) => (
          <div key={index} className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex align-items-center justify-content-center rounded-2 flex-column my-3">
            <div className="bg-light shadow p-3 rounded d-flex flex-column justify-content-center align-items-center">
              <div className="bg-secondary text-light p-2 rounded text-center px-3 w-100">
                {index + 1} : {e.name}
              </div>

              <h6 className="bg-light text-dark mt-2 p-2 rounded">
                Before Update
              </h6>
              <CategoryCard category={e} />
              <h6 className="bg-light text-dark p-2 rounded">
                After The Update
              </h6>
              <CategoryCard category={updatedPreview} />

              {/* Update Category & Delete */}

              <div class="input-group input-group-sm  mt-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder={e.name}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </div>
              <div class="input-group input-group-sm  mt-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Image URl
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder={e.image}
                  onChange={(e) => setUpdatedImg(e.target.value)}
                />
              </div>
              <div class="input-group input-group-sm  mt-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Permanent Link
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder={e.permanentLink}
                  onChange={(e) => setUpdatedLink(e.target.value)}
                />
              </div>

              {/* Buttons Delete & Update  */}
              <div className="mt-3 ">
                <button
                  type="submit"
                  className="btn btn-danger mx-2 "
                  onClick={() => deleteCategory(e.id)}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="btn btn-primary mx-2 "
                  onClick={() => updateCategory(e.id)}
                >
                  update
                </button>

                <CategoryUpdate category={e} index={index}/>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
