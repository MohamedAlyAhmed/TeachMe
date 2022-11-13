import React from 'react'
import './mycourses.css'
import { DataContext  } from "../../../DataContext";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../../DataContext';

export default function MyCourses() {

    const {myEnrollsCourses } = useContext(DataContext);

    console.log(myEnrollsCourses)
    return (
        <div>
            <div className='my-courses container-lg'>
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
            </div>
        </div>
    )
}
