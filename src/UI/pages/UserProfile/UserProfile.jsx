import "./UserProfile.css"
import React, { Component, useEffect } from "react";
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DataContext } from '../../../DataContext';





export default function UserProfile() {
    
    let { getUserData } = useContext(DataContext);
    

    return (
        <>
            <div className="profile-page">
                <div className="card-profile">
                    <div className="user-info-container">

                        <div className="user-profile-info">
                            <div className="user-profile-avatar">
                                <img src="assets/default-avatar.jpg" />
                            </div>
                            <div className="user-profile-info-details">
                                {props.userData ?
                                    <>
                                        <h2>{props.userData.first_name} {props.userData.last_name}</h2>
                                        <p>
                                            {props.userData.email}
                                        </p>
                                    </>
                                    :<></>}


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
                            <a href="" className="side-page-item active-tab">Presonal Information</a>
                            <a href="" className="side-page-item">Acount Information</a>
                        </div>
                    </div>

                    <div className="setting-page-main-page">
                        <div className="main-page">
                            <div className="personal-page-content">
                                <div className="personal-page-content-title">
                                    <h2>Personal Information</h2>
                                </div>
                                <div className="personal-info-form">
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">Name</p>
                                        <div className="input-feild">
                                            {props.userData ?
                                            <>
                                            {Fname()}                                   
                                            <input type="text"  placeholder={fullName}/>
                                            </>
                                            :<></>}
                                            

                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">Gender</p>
                                        <div className="input-gender d-flex">                             
                                            <input type="radio" name="gender" id="male" />
                                            <label htmlFor="male" id="formale" className="btn btn-outline-tangerine">Male</label>
                                            <input type="radio" name="gender" id="female"/>
                                            <label htmlFor="female" id="forfemale" className="btn btn-outline-tangerine">Female</label>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">Age</p>
                                        <div className="d-flex">                             
                                            <input type="number " id="age" />
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">country</p>
                                        <div className="d-flex">                             
                                            <input type="select " id="country" />
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">city</p>
                                        <div className="d-flex">                             
                                            <input type="number " id="city" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}