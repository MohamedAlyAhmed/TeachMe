import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import jwtDecode from "jwt-decode";
export const BASE_URL = "https://teachme-iti.glitch.me";
export let DataContext = createContext([]);

export default function DataProvider(props) {
  const [userData, setUserData] = useState(null);
  let [courses, setCourses] = useState([]);
  let [categories, setCourseCategories] = useState([]);
  let [instructors, setInstructors] = useState([]);
  let [users, setUsers] = useState([]);
  let [sections, setSections] = useState([]);
  let [myEnrollsCourses, setMyEnrollsCourses] = useState([]);
  let [mySaveCourses, setMySaveCourses] = useState([]);

  useEffect(() => {
    //get Courses Data
    axios.get(`${BASE_URL}/courses`).then((res) => {
      setCourses(res.data);
    });
    //get Categories Data
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
    //get sections Data
    axios.get(`${BASE_URL}/sections`).then((res) => {
      setSections(res.data);
    });

    getUserData()
  }, []);


  const getUserData = () => {
    if (localStorage.getItem('userToken')) {
      let decodedToken = jwtDecode(localStorage.getItem("userToken"));
      setUserData(decodedToken);
      setEnrollsCourses(decodedToken._id);
      setSaveCourses(decodedToken._id);
    }
  }

  const setEnrollsCoursesWithUserID = () => {
    setEnrollsCourses(userData._id);
  }

  const setEnrollsCourses = (userID) => {
    axios.get(`${BASE_URL}/enrolls?user_id=${userID}`).then((res) => {
      setMyEnrollsCourses(res.data);
    });
  }
  const setSaveCoursesWithUserID = () => {
    setSaveCourses(userData._id);
  }

  const setSaveCourses = (userID) => {
    axios.get(`${BASE_URL}/savedList?user_id=${userID}`).then((res) => {
      setMySaveCourses(res.data);
    });
  }


  const LogOut = () => {
    localStorage.removeItem('userToken');
    setUserData(null)
    useNavigate('/login')
  }

  const getCommentsForCourse = async (courseID) => {
    let res = await axios.get(`${BASE_URL}/comments?course_id=${courseID}`)
    return res.data;
  }

  const reGetCategories = () => {
    //re get Categories Data
    axios.get(`${BASE_URL}/CourseCategories`).then((res) => {
      setCourseCategories(res.data);
    });
  }
  const reGetCourses = () => {
    //reget Courses Data
    axios.get(`${BASE_URL}/courses`).then((res) => {
      setCourses(res.data);
    });
  }
  const reGetEnroll = (userID) => {
    //reGetEnroll Courses Data
    axios.get(`${BASE_URL}/savedList?user_id=${userID}`).then((res) => {
      setMySaveCourses(res.data);
    });
  }

  const reGetInstructors = () => {
    //re get instructors Data
    axios.get(`${BASE_URL}/instructors`).then((res) => {
      setInstructors(res.data);
    });
  }

  return (
    <DataContext.Provider
      value={{
        userData,
        courses,
        categories,
        instructors,
        users,
        sections,
        LogOut,
        getUserData,
        myEnrollsCourses,
        setEnrollsCoursesWithUserID,
        getCommentsForCourse,
        reGetCategories,
        reGetInstructors,
        mySaveCourses,
        setSaveCoursesWithUserID,
        reGetCourses
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
