import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BASE_URL = "http://localhost:3000";
export let DataContext = createContext([]);

export default function DataProvider(props) {
  let [courses, setCourses] = useState([]);
  let [categories, setCourseCategories] = useState([]);
  let [instructors, setInstructors] = useState([]);
  let [users, setUsers] = useState([]);
  let [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    //get Courses Data
    axios.get(`${BASE_URL}/courses`).then((res) => {
      setCourses(res.data);
    });
    //get CourseCategories Data
    axios.get(`${BASE_URL}/CourseCategories`).then((res) => {
      setCourseCategories(res.data);
    });
    //get instructors Data
    axios.get(`${BASE_URL}/instructors`).then((res) => {
      setInstructors(res.data);
    });
    //get users Data
    axios.get(`${BASE_URL}/users`).then((res) => {
      setUsers(res.data);
    });
    //get enrolls Data
    axios.get(`${BASE_URL}/enrolls`).then((res) => {
      setEnrolls(res.data);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ courses, categories, instructors, users, enrolls }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
