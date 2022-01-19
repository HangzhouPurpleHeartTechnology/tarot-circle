import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ element: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    element={(() => (!loggedIn ? <Component /> : <Navigate to='/' />))()}
  />
);

const Protected = ({ element: Component, loggedIn }) => (
  <Route element={(() => (loggedIn ? <Component /> : <Navigate to='/signin' />))()} />
);

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);
