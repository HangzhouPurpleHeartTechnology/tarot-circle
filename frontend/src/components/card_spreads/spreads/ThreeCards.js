import React from 'react';
import Card from '../spreads/Card';
import { Box } from '@mui/material';

function ThreeCards() {
  return (
    <Box
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png',
      }}
      sx={{
        minWidth: { xs: 400, sm: 500, md: 600, lg: 700, xl: 800 },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300,
        borderRadius: 3,
      }}
    >
      <Card />
      <Card />
      <Card />
    </Box>
  );
}

export default ThreeCards;
