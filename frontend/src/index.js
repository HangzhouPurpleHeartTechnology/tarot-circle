import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import configureStore from './store/ConfigureStore';
import { actionSignout } from './actions/SessionActions';
import { setAuthToken } from './apis/SessionApi';
import jwt_decode from 'jwt-decode';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const token = localStorage.jwtToken;
  const theme = createTheme();
  if (!token) store = configureStore({});
  else {
    const user = jwt_decode(token);
    console.log('token', token);
    store = configureStore({ session: { isAuthenticated: true, user } });
    if (user.exp <= Date.now() / 1000) store.dispatch(actionSignout());
  }
  window.store = store;
  ReactDOM.render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </LocalizationProvider>,
    document.getElementById('root')
  );
  reportWebVitals();
});
