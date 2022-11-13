import { DataContext } from '../../../../DataContext';
import Select from 'react-select'
import React, { Component, useContext, useEffect, useState, useMemo } from "react";

import countryList from 'react-select-country-list'
import { Link, Outlet } from "react-router-dom";




export default function PersonalInformation() {


    const { userData } = useContext(DataContext);
    let fullName;
    fullName = userData.first_name + " " + userData.last_name;

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }






    return (
        <>
            <div className="personal-page-content">
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
                            <input type="radio" name="gender" id="male" checked="checked"/>
                            <label htmlFor="male" id="formale" className="btn btn-outline-tangerine">Male</label>
                            <input type="radio" name="gender" id="female"  />
                            <label htmlFor="female" id="forfemale" className="btn btn-outline-tangerine">Female</label>
                        </div>
                    </div>
                    <div className="d-inline-flex col-md-12 mb-3 align-items-center  ">
                        <p className="col-md-3">Age</p>

                        <input type="number" name="age" id="age" value={userData.age} />

                    </div>
                    <div className="d-inline-flex col-md-12 mb-3 align-items-center ">
                        <p className="col-md-3">country</p>
                        <div className="d-flex col-md-3">
                            <Select className='select-country'   options={options} value={value} onChange={changeHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}