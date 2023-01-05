import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
import { InstructorPage } from "./UI/pages/InstructorPage/InstructorPage";
import UserProfile from "./UI/pages/UserProfile/UserProfile";
import Dashboard from "./UI/pages/Dashboard/Dashboard";
import DashboardHome from "./UI/pages/Dashboard/Dashboard Home/DashboardHome";
import CoursesPanel from "./UI/pages/Dashboard/Courses Panel/CoursesPanel";
import InstructorsPanel from "./UI/pages/Dashboard/Instructors Panel/InstructorsPanel";
import CategoryPanel from "./UI/pages/Dashboard/Category Panel/CategoryPanel";
import PersonalInformation from "./UI/pages/UserProfile/Personal/personalInf";
import SavesList from "./UI/pages/UserProfile/SavedList/SavesList";
import MyCourses from "./UI/pages/UserProfile/MyCourses/Mycourses";


//Landing Page LazyLoading
const LazyLandingPage = React.lazy(() =>
  import("./UI/pages/LandingPage/langingPage")
);

// Course Page LazyLoading
const LazyCoursePage = React.lazy(() =>
  import("./UI/pages/course page/CoursePage")
);

//Category LazyLoading
const LazyCategoryPage = React.lazy(() =>
  import("./UI/pages/CategoryPage/CategoryPage")
);

//watch LazyLoading
const LazyWatchPage = React.lazy(() =>
  import("./UI/pages/watch page/WatchPage")
);

//Error LazyLoading
const LazyErrorPage = React.lazy(() => import("./UI/pages/Error Page/Error"));

//Instructors LazyLoading Page
const LazyInstructorsPage = React.lazy(() =>
  import("./UI/pages/InstructorsPage/InstructorsPage")
);
//userProfile LazyLoading Page
const LazyUserProfilePage = React.lazy(() =>
  import("./UI/pages/UserProfile/UserProfile")
);
const LazyUserMyProgressPage = React.lazy(() =>
  import("./UI/pages/MyProgress/MyProgress")
);
const LazyMyCertificatesPage = React.lazy(() =>
  import("./UI/components/MyCertificates/MyCertificates")
);
const LazyWishlistPage = React.lazy(() =>
  import("./UI/components/SavedList/SavedList")
);

// basename={'/TeachMe'}
function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        {/* <Router > */}
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
                  <LazyInstructorsPage />
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
                  <LazyUserProfilePage />
                </React.Suspense>
              }
            >
              <Route path="Personal" element={<PersonalInformation />} />
              <Route path="SavesList" element={<SavesList />} />
              <Route path="MyCourses" element={<MyCourses />} />
            </Route>

            <Route
              path="watch/:courseId/:vedioID"
              element={
                <React.Suspense>
                  <LazyWatchPage />
                </React.Suspense>
              }
            />

            <Route
              path="watch/:courseId"
              element={
                <React.Suspense>
                  <LazyWatchPage />
                </React.Suspense>
              }
            />

            <Route path="dashboard" element={<Dashboard />}>
              <Route path="home" element={<DashboardHome />} />
              <Route path="courses_panel" element={<CoursesPanel />} />
              <Route path="category_panel" element={<CategoryPanel />} />
              <Route path="instructors_panel" element={<InstructorsPanel />} />
            </Route>

            <Route
              path="*"
              element={
                <React.Suspense>
                  <LazyErrorPage />
                </React.Suspense>
              }
            />
            <Route
              path="my-progress"
              element={
                <React.Suspense>
                  <LazyUserMyProgressPage />
                </React.Suspense>
              }
            />
            <Route
              path="my-certificates"
              element={
                <React.Suspense>
                  <LazyMyCertificatesPage />
                </React.Suspense>
              }
            />
            <Route
              path="saved-list"
              element={
                <React.Suspense>
                  <LazyWishlistPage />
                </React.Suspense>
              }
            />
          </Routes>
        {/* </Router> */}
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
