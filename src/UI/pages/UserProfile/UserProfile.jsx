import "./UserProfile.css"
import React, { Component, useContext, useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DataContext } from '../../../DataContext';
import { Link, Outlet } from "react-router-dom";
import PersonalInformation from "./Personal/personalInf";





export default function UserProfile() {

 
    const { userData } = useContext(DataContext);
    let fullName;
    fullName = userData.first_name + " " + userData.last_name;



    var btnContainer = document.getElementById("side-menu");
    var btns = document.getElementsByClassName("side-page-item");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active-tab");
      
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active-tab", "");
          }
      
          // Add the active class to the current/clicked button
          this.className += " active-tab";
        });
      }
    
    return (
        <>
            <div className="profile-page">
                <div className="card-profile">
                    <div className="user-info-container">

                        <div className="user-profile-info">
                            <div className="user-profile-avatar">
                                <img src={`https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg`} />
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
                        <div className="side-menu" id="side-menu">

                            <Link to="Personal" className="side-page-item active-tab" >Personal Information</Link>
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