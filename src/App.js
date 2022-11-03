import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './UI/pages/Counter';
import Regestration from './UI/pages/regestration';



const LazyCoursePage = React.lazy(() => import('./UI/pages/CourcePage'));


function App() {
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
          <Route path='regestration' element={
            <React.Suspense>
              <Regestration />
            </React.Suspense>
          } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
