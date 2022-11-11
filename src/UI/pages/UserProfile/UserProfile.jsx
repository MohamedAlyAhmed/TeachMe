import "./UserProfile.css"
import React, { Component, useContext, useEffect, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DataContext } from '../../../DataContext';
import countryList from 'react-select-country-list'





export default function UserProfile() {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }



    const { userData } = useContext(DataContext);
    let fullName;
    fullName = userData.first_name + " " + userData.last_name
    console.log(userData);
    function handleSidePage() {
        const current = document.getElementById('')
    }

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
                            <a className="side-page-item active-tab" onClick={handleSidePage}>Presonal Information</a>
                            <a className="side-page-item" onClick={handleSidePage}>Acount Information</a>
                        </div>
                    </div>

                    <div className="setting-page-main-page">
                        <div className="main-page">
                            {/* <div className="personal-page-content">
                                <div className="personal-page-content-title">
                                    <h2>Personal Information</h2>
                                </div>
                                <div className="personal-info-form">
                                    <div className="d-inline-flex align-items-center section-name">
                                        <p className="col-md-3">Name</p>
                                        <div className="input-feild">
                                            <input type="text" placeholder={fullName} />
                                        </div>
                                    </div>
                                    <div className="d-inline-flex col-md-12  align-items-center section-gender">
                                        <p className="col-md-3">Gender</p>
                                        <div className="input-gender d-flex col-md-9">
                                            <input type="radio" name="gender" id="male" />
                                            <label htmlFor="male" id="formale" className="btn btn-outline-tangerine">Male</label>
                                            <input type="radio" name="gender" id="female" />
                                            <label htmlFor="female" id="forfemale" className="btn btn-outline-tangerine">Female</label>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex col-md-12 mb-3 align-items-center  ">
                                        <p className="col-md-3">Age</p>

                                        <input type="number" name="age" id="age" value={userData.age} />

                                    </div>
                                    <div className="d-inline-flex col-md-12 mb-3 align-items-center ">
                                        <p className="col-md-3">country</p>
                                        <div className="d-flex">
                                            <Select options={options} value={value} onChange={changeHandler} />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div>
                                <div className="acount-page-content-title">
                                    <h2>Account Information</h2>
                                </div>
                                <div class="form-group row cursor-pointer">
                                    <label for="email" class="col-sm-4 col-form-label cursor-pointer"> Email </label>
                                    <div class="col-sm-7 col-10 cursor-pointer">
                                        <input type="email" id="email" value={userData.email} class="form-control cursor-pointer ng-untouched ng-pristine ng-valid" />
                                    </div>
                                    <div class="col-sm-1 col-2 cursor-pointer">

                                    </div>
                                </div>
                                <div class="form-group row cursor-pointer">
                                    <label for="email" class="col-sm-4 col-form-label cursor-pointer"> Password </label>
                                    <div class="col-sm-7 col-10 cursor-pointer">
                                        <input type="password" id="password" value={userData.password} class="form-control cursor-pointer ng-untouched ng-pristine ng-valid" />
                                    </div>
                                    <div class="col-sm-1 col-2 cursor-pointer">

                                    </div>
                                </div>
                                <div class="form-group row cursor-pointer">
                                    <label for="email" class="col-sm-4 col-form-label cursor-pointer"> Mobile Number </label>
                                    <div class="col-sm-7 col-10 cursor-pointer">
                                        <input type="number" id="mobile-number" value={userData.password} class="form-control cursor-pointer ng-untouched ng-pristine ng-valid" />
                                    </div>
                                    <div class="col-sm-1 col-2 cursor-pointer">

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