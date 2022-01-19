import React from 'react';
import { Grid, Fade } from '@mui/material';
import Card from './HomePageSingleCard';
import Background from '../Background';

const Cards = () => (
  <Fade in={true} timeout={{ enter: 2000 }}>
    <Grid container style={{ marginBottom: 200, marginTop: 70 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
    </Grid>
  </Fade>
);

const Div = () => <div></div>;

function HomeCards({ spreads }) {
  return (
    <div>
      <Cards style={{ zIndex: 999 }} />
      <div>
        <Background component={Div} zIndex={-1} opacity={0.7} />
      </div>
    </div>
  );
}

export default HomeCards;
