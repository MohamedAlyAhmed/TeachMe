import React from "react";
import "./landingPage.css";
import Picks from "./Picks/Picks";
import { Map } from "./map/map";
import InstructorsPicks from "./InstructorPicks/InstructorsPicks";
import MyButton from "../../components/Button/Button";
// import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import axios from "axios";
function LandingPage() {
  // const [data, setData] = useState([]);
  // //search
  // useEffect(() => {
  //   loadBlogsData();
  // }, []);

  // const loadBlogsData = async () => {
  //   const response = await axios.get("http://localhost:5000/blogs");
  //   if (response.status === 200) {
  //     setData(response.data);
  //   } else {
  //     console.log("error");
  //   }
  // };
  // const [searchValue, setSearchValue] = useState("");

  // const onInputChange = (e) => {
  //   if (!e.target.value) {
  //     <LandingPage />;
  //     loadBlogsData();
  //   }
  //   setSearchValue(e.target.value);
  // };
  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.get(
  //     `http://localhost:3000/courses?q=${searchValue}`
  //   );
  //   if (response.status === 200) {
  //     console.log('====================================');
  //     console.log(response.data);
  //     console.log('====================================');
  //     setData(response.data);
  //   } else {
  //     console.log("errrorrrr");
  //   }
  // };
  return (
    <>
      {/* <Search
        searchValue={searchValue}
        onInputChange={onInputChange}
        handleSearch={handleSearch}
      /> */}
      <header>
        <div className="hero-image">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1 className="display-2 fw-bold">Learn Online</h1>
              <p>From the biggest Arabic library of video-based courses</p>
              <MyButton>Subscribe now</MyButton>
            </div>
          </div>
        </div>
      </header>

      <Picks />
      <Map />
      <div class="col-sm-12 col-md-12 mb-4">
        <h3 class="text-center mt-4 text-secondary text-dark font-weight-bolder">
          Our instructors
        </h3>
        <p className=" text-center text-muted">
          Our instructors are real world experts bringing real knowledge and
          offering unique experiences .
        </p>
      </div>
      <InstructorsPicks />
    </>
  );
}

export default LandingPage;
