import "./InstructorPage.css";
import MyButton from "../../components/Button/Button";
import { Card } from "react-bootstrap";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import Picks from "../LandingPage/Picks/Picks";
import React, { useContext,useState } from "react";
import { DataContext } from "../../../DataContext";
import CourseCard from "../../components/CourseCard/CourseCard";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 100) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

export const InstructorPage = () => {
//   let { instructor } = useContext(DataContext);
  return (
    <>
<div className="myontainer1">
    <div className="item">
    <img src="https://static.toiimg.com/photo/83890830/83890830.jpg?v=3" alt="instructor" className="mb-3 instructor-img"/>
    <h4 className="fw-bold mb-3 ">Khaled Habib </h4>
    <p className="tx-accentColor ">Professor of Marketing and Management</p>

    </div>
     <Card
         className="cardInfo mb-2"
          style={{ width: '20rem',height:'13rem' }}
        >
          <Card.Body>
           
            <div className="myrow">
                <div className="viewRow">
                    <div className="icon1">
                    <i class="fa-solid fa-eye"></i>

                    </div>
    <Card.Title> Views  </Card.Title>

                </div>
            <h5>2,324</h5>
            </div>
            <div className="myrow">
                <div className="viewRow">
                    <div className="icon2">
                    <i class="fa-solid fa-graduation-cap"></i>

                </div>
              
                 <Card.Title> Learners </Card.Title>

                </div>
            <h5>5,400</h5>
            </div>
          </Card.Body>
        </Card>
</div>
     {/* *** */}
<div className="myontainer2">
    <h3 className="fw-bold ">About Mentor</h3>
   
     
      <h5>
        <ReadMore>
        Khaled Habib is a senior management and Human resources executive as well as a well-rounded academic, enjoying a rich profile of regional and global expertise, with a proven track record in organization design, development, change and performance management, as well as restructuring, talent management,
         and executive leadership coaching.
        </ReadMore>
      </h5>
</div>
<div className="myontainer3">
    <div className="item">
    <img src="https://static.toiimg.com/photo/83890830/83890830.jpg?v=3" alt="instructor" className="mb-3 instructor-img"/>
    <h4 className="fw-bold mb-3 ">Khaled Habib </h4>
<div>
<p className="tx-accentColor ">Professor of Marketing and Management</p>

</div>
    </div>
</div>

     </>

       
  );
};


