import React, { useState, useEffect } from 'react';
import { Grid, Fade } from '@mui/material';
import Card from './HomePageSinglePost';
import Background from '../Background';
import axios from 'axios';

function HomeCards() {
  const [spreads, setSpreads] = useState([]);
  useEffect(() => {
    axios.get('/api/v1/spreads').then((res) => {
      console.log('frontend result', res.data);
      debugger;
      setSpreads(res.data);
    });
  }, []);

  const Cards = () => {
    return (
      <Fade in={true} timeout={{ enter: 2000 }}>
        <Grid
          container
          style={{
            marginBottom: 200,
          }}
        >
          {spreads.map((spread, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
              <Card spread={spread} />
            </Grid>
          ))}
        </Grid>
      </Fade>
    );
  };

  const Div = () => <div></div>;

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
