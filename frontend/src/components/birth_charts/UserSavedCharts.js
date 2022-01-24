import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

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
    <Box
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
      <Typography>nickname: {item.nickname}</Typography>
      <Typography>sun: {item.sun.sign}</Typography>
      <Typography>moon: {item.moon.sign}</Typography>
      <Typography>birthdate: {item.dateTime}</Typography>
    </Box>
  );
  const renderChartTable = (birthCharts) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 400,
        }}
      >
        {birthCharts.map((item) => {
          return renderTableItem(item);
        })}
      </Box>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <h1>ALL Your Saved Chart</h1>
      {charts ? renderChartTable(charts) : <h1>Nothing received</h1>}
    </Box>
  );
};

export default UserSavedCharts;
