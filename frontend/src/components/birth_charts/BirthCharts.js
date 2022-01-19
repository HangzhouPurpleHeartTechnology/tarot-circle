import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { MobileDatePicker, TimePicker } from '@mui/lab';
import { Origin, Horoscope } from 'circular-natal-horoscope-js';

import Input from '../input/Input';

const BirthCharts = () => {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const customOrbs = {
    conjunction: 8,
    opposition: 8,
    trine: 8,
    square: 7,
    sextile: 6,
    quincunx: 5,
    quintile: 1,
    septile: 1,
    'semi-square': 1,
    'semi-sextile': 1,
  };

  useEffect(() => {
    const origin = new Origin({
      year: value.getFullYear(),
      month: value.getMonth(),
      date: value.getDate(),
      hour: value.getHours(),
      minute: value.getMinutes(),
      latitude: 40.0,
      longitude: -70.0,
    });
    const horoscope = new Horoscope({
      origin,
      houseSystem: 'whole-sign',
      zodiac: 'tropical',
      aspectPoints: ['bodies', 'points', 'angles'],
      aspectWithPoints: ['bodies', 'points', 'angles'],
      aspectTypes: ['major', 'minor'],
      customOrbs: customOrbs,
      language: 'en',
    });
    console.log(horoscope);
  }, [value]);

  return (
    <div
      style={{
        padding: '100px 20px 0 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: 3, width: '50%' }}>
        <Typography
          variant='h6'
          style={{ color: 'purple', marginTop: 20, marginBottom: 10 }}
        >
          Birth Date and Time Picker
        </Typography>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            height: '30vh',
            alignItems: 'space-around',
            justifyContent: 'space-around',
          }}
        >
          <MobileDatePicker
            label='BIRTH DATE'
            inputFormat='MM/dd/yyyy'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            style={{ margin: '20px 0' }}
          />
          <TimePicker
            label='BIRTH TIME'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant='outlined' color='secondary'>
            GENERATE BIRTH CHART
          </Button>
        </Box>
      </Box>
      <Box></Box>
    </div>
  );
};

export default BirthCharts;
