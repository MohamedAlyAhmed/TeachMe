

// from Ahmed Magdy .... this is a templet of reducer you wil create like it .
// we will not use this reducer on our app.
// note: don't forget to add your new reducer to reducer proberty on store.js file .



import { createSlice } from '@reduxjs/toolkit'

export const BASE_ULR = "http://localhost:3000";

export const server = createSlice({
    name: 'server',
    initialState: {
        courses: [],
        instructors: [],
        CourseCategories: [],
    },
    reducers: {
        getCourses: (state) => {
            fetch(`${BASE_ULR}/courses`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    state.courses = data
                });
        },
        getInstructors: (state) => {
            fetch(`${BASE_ULR}/instructors`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    state.instructors = data
                });
        },
        getCourseCategories: (state) => {
            fetch(`${BASE_ULR}/CourseCategories`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    state.CourseCategories = data
                });
        },


        setNewUser: (state, userData) => {
            //

            //
        },
    },
})

// Action creators are generated for each case reducer function
export const { getCourses, getInstructors, getCourseCategories } = server.actions

export default server.reducer