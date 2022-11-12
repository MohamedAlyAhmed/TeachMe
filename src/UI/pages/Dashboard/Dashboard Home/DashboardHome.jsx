import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../../../../DataContext';
import './DashboardHome.css'

export default function DashboardHome() {
    
    const { courses } = useContext(DataContext);
    const { categories } = useContext(DataContext);
    const { instructors } = useContext(DataContext);
    const { users } = useContext(DataContext);

  return (
    <div className='d-flex justify-content-center align-items-center bg-dashboard '>

<div className="circle bg-dark m-5 d-flex flex-column justify-content-center align-items-center">
    <p className='display-5 '>Courses</p>
    <p className='circle-sm bg-warning text-dark display-6 mt-3 d-flex justify-content-center align-items-center'>{courses.length}</p>
</div>

<div className="circle bg-dark m-5 d-flex flex-column justify-content-center align-items-center">
    <p className='display-5 '>Categories</p>
    <p className='circle-sm bg-primary text-dark display-6 mt-3 d-flex justify-content-center align-items-center'>{categories.length}</p>
</div>

<div className="circle bg-dark m-5 d-flex flex-column justify-content-center align-items-center">
    <p className='display-5 '>Instructors</p>
    <p className='circle-sm bg-danger text-dark display-6 mt-3 d-flex justify-content-center align-items-center'>{instructors.length}</p>
</div>

<div className="circle bg-dark m-5 d-flex flex-column justify-content-center align-items-center">
    <p className='display-5 '>Users</p>
    <p className='circle-sm bg-success text-dark display-6 mt-3 d-flex justify-content-center align-items-center'>{users.length}</p>
</div>









    </div>
  )
}
