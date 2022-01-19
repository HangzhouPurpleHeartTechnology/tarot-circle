import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#760BD6',
        backgroundImage: `url(https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png)`,
        backgroundPosition: 'top',
        cursor: 'pointer',
      }}
      elevation={3}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{ fontWeight: 'bold' }}
          onClick={() => {
            navigate('/');
          }}
        >
          TAROT CIRCLE
        </h1>
      </Toolbar>
    </AppBar>
  );
}
