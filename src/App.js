import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Register from './UI/pages/Register/Register';
import Login from './UI/pages/Login/Login';
import jwtDecode from 'jwt-decode';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './UI/components/Header/nav_Bar';


const LazyCoursePage = React.lazy(() => import('./UI/pages/CourcePage'));
const LazyLandingPage = React.lazy(() => import('./UI/pages/LandingPage/langingPage'));




function App() {
  const [userData, setUserData] = useState(null)

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem('userToken'))
    setUserData(decodedToken)
  }

  useEffect(() => { console.log(userData) }, [userData])

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Router>
          <Routes>
            {/* .... any other path routing create it here .... */}

            {/* <Route path='' element={
            <React.Suspense>
              <Counter />
            </React.Suspense>
          } /> */}

            <Route path='' element={
              <React.Suspense>
                <LazyLandingPage />
              </React.Suspense>
            } />


            <Route path='course' element={
              <React.Suspense>
                <LazyCoursePage />
              </React.Suspense>
            } />

            <Route path='register' element={
              <React.Suspense>
                <Register />
              </React.Suspense>
            } />

            <Route path='login' element={
              <React.Suspense>
                <Login getUserData={getUserData} />
              </React.Suspense>
            } />
          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
