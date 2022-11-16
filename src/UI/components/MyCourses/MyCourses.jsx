import React from 'react'
import './mycourses.css'
import { DataContext } from "../../../DataContext";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../../DataContext';
import CourseCard from '../CourseCard/CourseCard';

export default function MyCourses() {
   
    const { myEnrollsCourses,courses } = useContext(DataContext);
    // let coursesEnroll = [];
    // myEnrollsCourses.forEach( element => {
    //     let filtercourses = courses.filter((e)=>{
    //         element.course_id = e.id
    //     })
    //     coursesEnroll.push(filtercourses)
    //     console.log(filtercourses);
    // });
    
    

    return (
        <div>
            <div className='my-courses container-lg'>



                {myEnrollsCourses.length > 0 ?
                    <>
                        <h2>My Courses</h2>
                        <div className='courses'>
                            <div className="container w-100">
                                <div className="row ">
                                    {/* {coursesEnroll.map((e, index) => (
                                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 small-screen">
                                            <CourseCard course={e} />
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <>
                        <div className="empty-section">
                            <h2 className="page-title"> My Courses </h2>
                            <div className='empty-section_main'>
                                <div className='empty-img'>
                                    <img className='w-100' src="assets/noCertificates.png" alt="" />
                                </div>
                                <p className="empty-section-title">
                                    You do not have any courses
                                </p>
                                <p className="empty-section-subtitle">
                                    Start a new course to be able to track it here.
                                </p>
                            </div>

                        </div>
                    </>}
            </div>
        </div>
    )
}
