import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box, Typography, Grid } from '@mui/material';
import SortCharts from './SortCharts';

const UserSavedCharts = () => {
  const [charts, setCharts] = useState(undefined);
  const user = useSelector((state) => state.session.user.id);
  console.log(user);
  const data = { user };
  useEffect(() => {
    axios
      .post('/api/v1/birthcharts/usersaved', data)
      .then((res) => {
        console.log(res.data);
        setCharts(res.data);
      })
      .catch((err) => {
        console.log('error getting all user saved charts', err);
      });
  }, []);

  const renderTableItem = (item) => (
    <Grid
      item
      xs={6}
      sm={4}
      lg={3}
      key={item._id}
      sx={{
        borderRadius: 2,
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        margin: 3,
        boxShadow: '0px 0px 5px #ccc',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: 4,
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: 20, marginRight: 5 }}>
          {item.nickname}
        </span>
      </Box>
      <span>SUN: {item.sun.sign.toUpperCase()}</span>
      <span>MOON: {item.moon.sign.toUpperCase()}</span>
      <span>
        BIRTH DATE:{' '}
        {item.dateTime.toUpperCase().split('T')[0].replace(/-/g, ' / ')}
      </span>
    </Grid>
  );
  const renderChartTable = (birthCharts) => {
    return (
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: '7rem',
        }}
      >
        {birthCharts.map((item) => {
          return renderTableItem(item);
        })}
      </Grid>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h1>ALL Your Saved Chart</h1>
      <SortCharts />
      {charts ? renderChartTable(charts) : <h1>Nothing received</h1>}
    </Box>
  );
};

export default UserSavedCharts;
