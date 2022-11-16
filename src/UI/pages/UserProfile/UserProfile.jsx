import "./UserProfile.css"
import React, { Component, useContext, useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DataContext } from '../../../DataContext';
import countryList from 'react-select-country-list'
import { Link, Outlet } from "react-router-dom";
import PersonalInformation from "./Personal/personalInf";
import AccountInformation from "./Account/AccountInf";




export default function UserProfile() {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }

    const sidepageitem = document.querySelectorAll(".side-page-item")
    function handlebuttonlink(el) {
        console.log(el);

    }

    const { userData } = useContext(DataContext);
    let fullName;
    fullName = userData.first_name + " " + userData.last_name;
    console.log(userData);


    return (
        <>
            <div className="profile-page">
                <div className="card-profile">
                    <div className="user-info-container">

                        <div className="user-profile-info">
                            <div className="user-profile-avatar">
                                <img src="/assets/default-avatar.jpg" />
                            </div>
                            <div className="user-profile-info-details">
                                <h2>{userData.first_name} {userData.last_name}</h2>
                                <p>
                                    {userData.email}
                                </p>
                            </div>
                        </div>
                        <div className="user-subscription-plan">
                            <p>You can subscribe on</p>
                            <h3>Monthly Plan With 199.99 EGP</h3>
                            <div className="subscripe-btn-container">
                                <button className="btn btn-outline-danger subscripe-btn ">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settings-page_title">
                    <h1>Setting</h1>
                </div>

                <div className="setting-page-content">

                    <div className="setting-page-side-menu">
                        <div className="side-menu">

                            <Link to="Personal" className="side-page-item active-tab" >Presonal Information</Link>
                            <Link to="Account" className="side-page-item " >Acount Information</Link>
                            <Link to="SavesList" className="side-page-item" >SavesList</Link>
                            <Link to="MyCourses" className="side-page-item" >MyCourses</Link>

                        </div>
                    </div>

                    <div className="setting-page-main-page">
                        <div className="main-page">
                            <Outlet></Outlet>


                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}