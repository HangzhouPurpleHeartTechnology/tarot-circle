import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';

export default function ButtonAppBar() {
  const history = useHistory();
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#760BD6',
        backgroundImage: `url(https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png)`,
        backgroundPosition: 'top',
        cursor: 'pointer',
      }}
      elevation={10}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }} onClick={() => history.push('/')}>
          TAROT CIRCLE
        </h1>
      </Toolbar>
    </AppBar>
  );
}
