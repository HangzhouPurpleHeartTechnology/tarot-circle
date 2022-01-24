import React from 'react';
import { Box, AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        position='fixed'
        style={{
          height: '8vh',
          backgroundColor: '#760BD6',
          backgroundImage: `url(https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png)`,
          backgroundPosition: 'top',
          cursor: 'pointer',
          zIndex: 1,
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
      <AppBar
        elevation={0}
        position='static'
        style={{ background: 'blue', height: '8vh', zIndex: 3 }}
      ></AppBar>
    </Box>
  );
}
