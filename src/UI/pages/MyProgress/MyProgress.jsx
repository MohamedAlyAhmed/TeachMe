import React from 'react'
import './myprogress.css'
import MyCertificates from '../../components/MyCertificates/MyCertificates'
import MyCourses from '../../components/MyCourses/MyCourses'

export default function MyProgress() {
    const weeklyGoal = []


    return (

        <>
            <div className="myprogress-page  container-lg">
                <div className=' d-flex justify-content-between mt-9 mb-5' >
                    <h2>My Progress</h2>
                    <a href="" className='btn btn-alm-outline messages-link'>
                        <i className="fa-solid fa-comments "></i>
                        Messages
                    </a>
                </div>
                <div className='weekly-progress-container'>
                    <div className='empty-weekly-goal'>
                        <p>+ Set a Weekly Goal</p>
                    </div>
                    <div className="weekly-details">
                        <div className="weekly-state">
                            <h2>Weekly Progress </h2>
                            <div className="weekly-state-details">
                                <div className="spent-hour">
                                    <p className="state-content">
                                        <i className="fa-regular fa-clock"></i>
                                        00:00
                                    </p>
                                    <p className="state-note">Hours spent learning</p>
                                </div>
                                <div className="finished">
                                    <p className="state-content">
                                        <i className="fa-regular fa-clock"></i>
                                        0
                                    </p>
                                    <p className="state-note">Lessons finished</p>
                                </div>
                            </div>

                        </div>
                        <div className="courses-state">
                            <h3>All Courses stats</h3>
                            <div className="courses-state-details">
                                <div className="courses-state-item">
                                    <div className="item-count">
                                        <i className="fa-solid fa-hourglass-start"></i>
                                        <p>0</p>
                                    </div>
                                    <p className='course-state-title'>In progress courses</p>
                                </div>
                                <div className="courses-state-item">
                                    <div className="item-count">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>0</p>
                                    </div>
                                    <p className='course-state-title'>Completed courses</p>
                                </div>
                                <div className="courses-state-item">
                                    <div className="item-count">
                                        <i className="fa-solid fa-certificate"></i>
                                        <p>0</p>
                                    </div>
                                    <p className='course-state-title'>Earned certificates</p>
                                </div>
                                <div className="courses-state-item">
                                    <div className="item-count">
                                        <i className="fa-solid fa-bookmark"></i>
                                        <p>0</p>
                                    </div>
                                    <p className='course-state-title'>Saved courses    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MyCourses />

            <MyCertificates />


        </>

    )
}
