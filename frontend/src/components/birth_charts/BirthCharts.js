import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { MobileDatePicker, TimePicker } from '@mui/lab';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Input from '../input/Input';
import ChartImageGenerator from './ChartImageGenerator';

const BirthCharts = () => {
  const [error, setError] = useState('');
  const [nickname, setNickname] = useState('');
  const [dateTime, setDateTime] = React.useState(new Date());
  const [birthChart, setBirtChart] = useState(undefined);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const user = useSelector((state) => state.session.user.id);

  const handleChange = (newDateTime) => {
    setDateTime(newDateTime);
  };

  const handleSubmit = () => {
    if (!birthChart || !nickname) {
      setError('Please check birth date and nick name');
      return;
    }
    const data = { dateTime, lat, lng, user, nickname };
    axios
      .post('/api/v1/birthcharts/', data)
      .then((res) => {
        console.log('res data', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const generateChart = () => {
    const data = {
      dateTime,
      lat,
      lng,
      nickname,
    };
    axios
      .post('/api/v1/birthcharts/generatechart', data)
      .then((res) => {
        console.log('res data', res.data);
        setBirtChart(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          minWidth: 400,
        }}
      >
        <Typography
          variant='h6'
          style={{ color: 'purple', marginTop: 20, marginBottom: 10 }}
        >
          Birth Date and Time Picker
        </Typography>
        <Typography variant='caption' style={{ height: 15, color: 'red' }}>
          {error ? error : ' '}{' '}
        </Typography>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-around',
            minHeight: '50vh',
            justifyContent: 'space-around',
          }}
        >
          <MobileDatePicker
            label='BIRTH DATE'
            inputFormat='MM/dd/yyyy'
            value={dateTime}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            style={{ margin: '20px 0' }}
          />
          <TimePicker
            label='BIRTH TIME'
            value={dateTime}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant='outlined' color='secondary' onClick={generateChart}>
            GENERATE BIRTH CHART
          </Button>
          <Box
            sx={{
              display: 'flex',
              opacity: birthChart ? 1 : 0,
              userSelect: birthChart ? '' : 'none',
              flexDirection: 'column',
              minHeight: 200,
              justifyContent: 'space-around',
              transition: 'opacity 0.5s ease',
            }}
          >
            <Input
              disabled={!birthChart}
              color='secondary'
              placeholder='Nick Name'
              sx={{ '.MuiInputBase-input': { height: 40 } }}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button
              disabled={!birthChart}
              color='secondary'
              variant='outlined'
              style={{ height: 40 }}
              onClick={handleSubmit}
            >
              Save Birth Chart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          flex: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '700px',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#eee',
              width: 400,
              height: 400,
              borderRadius: 999,
              mt: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ChartImageGenerator />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            mt: '2rem',
            minWidth: 400,
          }}
        >
          <Box>
            {birthChart
              ? birthChart?.map((el) => {
                  return (
                    <Box key={el.key}>
                      <Typography
                        variant='h6'
                        style={{
                          color: 'purple',
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      >
                        <span style={{ fontWeight: 'bold' }}>{el?.label}</span>:{' '}
                        {el?.Sign?.label}
                      </Typography>
                    </Box>
                  );
                })
              : null}
          </Box>
          <Box>
            {birthChart
              ? birthChart?.map((el) => {
                  return (
                    <div key={el.key}>
                      <Typography
                        variant='h6'
                        style={{
                          color: 'purple',
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      >
                        {el?.House?.label ? (
                          <span variant='body1' style={{ color: 'purple' }}>
                            <span style={{ fontWeight: 'bold' }}>House: </span>
                            {el?.House?.label}
                          </span>
                        ) : null}
                      </Typography>
                    </div>
                  );
                })
              : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BirthCharts;
