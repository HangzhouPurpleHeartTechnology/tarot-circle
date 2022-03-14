import './App.css';
import React, { useState } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/BottomNavbar';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import TopBar from './components/navbar/TopNavbar';
import ShowCardSpread from './components/card_spreads/ShowCardSpread';
import CardInfo from './components/cards/SingleCardExplanation';
import BirthCharts from './components/birth_charts/BirthCharts';
import UserSavedCharts from './components/birth_charts/UserSavedCharts';
import { shallowEqual, useSelector } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState('en');
  const { isAuthenticated } = useSelector(
    (state) => state.session,
    shallowEqual
  );

  function RequireAuth({ children, redirectTo }) {
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }
  function AuthRoutes({ children, redirectTo }) {
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
  }

  const handleChangeLanguage = () => {
    setLanguage((language) => (language === 'en' ? 'zh' : 'en'));
  };

  return (
    <div id='app'>
      <TopBar />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <RequireAuth redirectTo='/signin'>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path='/signin'
          element={
            <AuthRoutes redirectTo='/'>
              <Signin />
            </AuthRoutes>
          }
        />
        <Route
          path='/signup'
          element={
            <AuthRoutes redirectTo='/'>
              <Signup />
            </AuthRoutes>
          }
        />
        <Route path='/cardspreads/:cardSpreadId' element={<ShowCardSpread />} />
        <Route path='/card/:cardIndex' element={<CardInfo />} />
        <Route path='/birthcharts' element={<BirthCharts />} />
        <Route path='/savedcharts' element={<UserSavedCharts />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
