
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './UI/pages/Counter';
import Card from './Shared/Card/Card';



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
        </Routes>

      </Router>
      <Card />
    </Provider>


  );
}

export default App;
