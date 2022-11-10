import React, { useState } from "react";
import "./CategoryPanel.css";
import axios from "axios";
import { BASE_URL, DataContext } from "../../../../DataContext";
import { useContext } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";

export default function CategoryPanel() {
  const { categories } = useContext(DataContext);
  const [name, setName] = useState("Add New");
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
  );
  const [permanentLink, setPermanentLink] = useState("New-Category");

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
        name: "Abo Aly",
        image: image,
        permanentLink: "Abo Zied",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div>
      <div className="bg-dark text-center display-6 text-light">
        Category Panel
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
      <form className="col-xl-9 col-lg-7 col-md-6 col-sm-12  mt-5" onSubmit={() => AddCategory()}>
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
            Like : https://www.google.com/googlelogo.png{" "}
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


      <div className="bg-dark text-center display-6 text-light">
        Category Cards (Count : {categories.length})
      </div>


      <div className="row">
        {categories.map((e, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex align-items-center justify-content-center rounded-2 flex-column my-3">
            <CategoryCard category={e} />
            <div className="d-flex align-items-center justify-content-around rounded-2  bg-dark p-2">
              <div className="bg-secondary text-light p-2 rounded text-center px-3">
                {index + 1}
              </div>
              <button
                type="submit"
                className="btn btn-danger mx-2 "
                onClick={() => deleteCategory(e.id)}
              >
                Delete
              </button>
              <button
                type="submit"
                className="btn btn-primary mx-2"
                onClick={() => updateCategory(e.id)}
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
