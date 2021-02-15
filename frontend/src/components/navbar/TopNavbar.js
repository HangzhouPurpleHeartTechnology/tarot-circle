import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar
        position='fixed'
        style={{
          backgroundImage: `url(https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png)`,
          backgroundPosition: 'center',
        }}
        elevation={10}
      >
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontWeight: 'bold' }}>TAROT CIRCLE</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
