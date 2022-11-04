import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './UI/pages/Counter';
import Register from './UI/components/Register/Register';
import Login from './UI/components/Login/Login';
import jwtDecode from 'jwt-decode';


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
        {/* <Navbar /> */}
        <Routes>
          {/* .... any other path routing create it here .... */}
          <Route path='' element={
            <React.Suspense>
              <Counter />
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
