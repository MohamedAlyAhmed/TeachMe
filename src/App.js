import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./UI/pages/Register/Register";
import Login from "./UI/pages/Login/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./UI/components/Header/nav_Bar";
import DataProvider from "./DataContext";
import Footer from "./UI/components/Footer/Footer";
import { InstructorsPage } from "./UI/pages/InstructorsPage/InstructorsPage";
import InstructorCard from "./UI/components/InstructorCard/InstructorCard";
import {InstructorPage} from "./UI/pages/InstructorPage/InstructorPage";
import UserProfile from "./UI/pages/UserProfile/UserProfile";


//Landing Page LazyLoading 
const LazyLandingPage = React.lazy(() =>
  import("./UI/pages/LandingPage/langingPage")
);
// Course Page LazyLoading
const LazyCoursePage = React.lazy(() =>
  import("./UI/pages/course page/CoursePage"));
//Category LazyLoading 
const LazyCategoryPage = React.lazy(() =>
  import("./UI/pages/CategoryPage/CategoryPage")
);

const LazyWatchPage = React.lazy(() =>
  import("./UI/pages/watch page/WatchPage")
);
//Error LazyLoading
const LazyErrorPage = React.lazy(() =>
  import("./UI/pages/Error Page/Error")
);


//Instructors LazyLoading Page
// const LazyInstructorsPage = React.lazy(() =>
//   import("./UI/pages/InstructorsPage/InstructorsPage")
// );

function App() {





  return (
    <div>
      <DataProvider>
        <Header />
        <Router>
          <Routes>
            {/* .... any other path routing create it here .... */}

            <Route
              path="/"
              element={
                <React.Suspense>
                  <LazyLandingPage />
                </React.Suspense>
              }
            />

            <Route
              path="register"
              element={
                <React.Suspense>
                  <Register />
                </React.Suspense>
              }
            />

            <Route
              path="login"
              element={
                <React.Suspense>
                  <Login />
                </React.Suspense>
              }
            />


            <Route
              path="course/:id"
              element={
                <React.Suspense>
                  <LazyCoursePage />
                </React.Suspense>
              }
            />

            <Route
              path="category"
              element={
                <React.Suspense>
                  <LazyCategoryPage />
                </React.Suspense>
              }
            />
            <Route
              path="category/:category"
              element={
                <React.Suspense>
                  <LazyCategoryPage />
                </React.Suspense>
              }
            />

            <Route
              path="instructors"
              element={
                <React.Suspense>
                  <InstructorsPage />
                </React.Suspense>
              }
            />
            <Route
              path="instructor/:mainUserId"
              element={
                <React.Suspense>
                  <InstructorPage />
                </React.Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <React.Suspense>
                  <UserProfile userData={userData} />
                </React.Suspense>
              }
            />
            

            <Route
              path="watch/:courseId/:vedioID"
              element={
                <React.Suspense>
                  <LazyWatchPage />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense>
                  <LazyErrorPage />
                </React.Suspense>
              }
            />



          </Routes>
        </Router>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
