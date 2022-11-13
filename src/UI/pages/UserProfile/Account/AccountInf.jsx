import { DataContext } from '../../../../DataContext';
import React, { Component, useContext, useEffect, useState, useMemo } from "react";




export default function AccountInformation() {



    const { userData } = useContext(DataContext);
    return (
        <>
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
        </>
    )
}