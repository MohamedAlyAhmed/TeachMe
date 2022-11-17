import { DataContext } from '../../../../DataContext';
import Select from 'react-select'
import React, { useContext, } from "react";





export default function PersonalInformation() {


    const { userData } = useContext(DataContext);
    let fullName;
    fullName = userData.first_name + " " + userData.last_name;



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
                            <input type="text" value={fullName} readOnly />
                        </div>
                    </div>
                    <div className="mt-3 d-inline-flex col-md-12 mb-3 align-items-center  ">
                        <p className="col-md-3">Age</p>

                        <input type="number" name="age" id="age" value={userData.age} readOnly />

                    </div>

                    <div className="d-inline-flex col-md-12 mb-3 align-items-center  ">
                        <label for="email" className="col-sm-3 col-form-label "> Email </label>
                        <div className="col-sm-9 col-10 ">
                            <input type="email" id="email" value={userData.email} className="form-control  ng-untouched ng-pristine ng-valid" readOnly />
                        </div>
                        <div className="col-sm-1 col-2 ">

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}