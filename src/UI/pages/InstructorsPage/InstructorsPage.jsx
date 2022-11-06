// import React from 'react';
// import "./InstructorsPage.css"
// function InstructorsPage() {
//     return (
//         <>
//        <div className='header'>
//        <h2>
//            Our Instructors
//         </h2>
//        </div>
//         </>

//     );
// }

// export default InstructorsPage;

import React, { useContext } from "react";

import "./InstructorsPage.css";
import Carousel from "react-grid-carousel";

import { DataContext } from "../../../DataContext";
import InstructorCard from "../../components/InstructorCard/InstructorCard";

export const InstructorsPage = () => {
  let { instructors } = useContext(DataContext);

  return (
    <div>
      <div className="header">
        <h2>Our Instructors</h2>
      </div>
      <div className=" container d-flex ">
     
          
            {instructors.map((e) => (
              <InstructorCard instructor={e} />
            ))}
         
      </div>
     
    </div>
  );
};
