import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Register from './UI/components/Register/Register';
import Login from './UI/components/Login/Login';
import jwtDecode from 'jwt-decode';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const LazyCoursePage = React.lazy(() => import('./UI/pages/CourcePage'));

   

 
function App() {
  const [userData , setUserData] = useState(null)

  function getUserData(){
   let decodedToken = jwtDecode(localStorage.getItem('userToken'))
   setUserData(decodedToken)
  }

  useEffect(()=>{console.log(userData)},[userData])

  return (
    <Provider store={store}>
      <Router>

        <Routes>
          {/* .... any other path routing create it here .... */}
          <Route path='' element={
            <React.Suspense>

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
              <Login getUserData = {getUserData} />
            </React.Suspense>
          } />
        </Routes>
      </Router>



    </Provider>
  );
}

export default App;
