import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SaveList.css'
import { DataContext } from "../../../DataContext";
import { useContext } from "react";
import CourseCard from "../CourseCard/CourseCard"




export default function SavedList() {
    const { mySaveCourses, courses } = useContext(DataContext);
    let CoursesFilter = [];
    mySaveCourses.map((e) => {
        let enrollCourses = courses.filter((course) => course.id == e.course_id);
        CoursesFilter.push(...enrollCourses);
    });


    const navigate = useNavigate()

    function navigator() {
        navigate('/category')
    }



    return (
        <div>
            <div className='gradient-div1'><h3>Saved Courses</h3></div>
            {CoursesFilter.length > 0 ? (
                <>  
                    <div className="courses">
                        <div className="container w-100">
                            <div className="row ">
                                {CoursesFilter.map((e, index) => (
                                    <div
                                        key={index}
                                        className="wd col-lg-6 col-md-12 col-sm-12 col-12 small-screen d-flex justify-content-center"
                                    >
                                        <CourseCard course={e} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="empty">
                        <div className="empty-img"></div>
                        <div className="empty-text">
                            <h3> Your wishlist is empty </h3>
                            <p> Tap the save icon on any course card or course page to wishlist it and get back to it later </p>
                            <button className='btn btn-outline-light empty-btn' onClick={navigator} >
                                Go Back
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
