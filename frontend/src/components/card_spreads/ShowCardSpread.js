import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ThreeCards from './spreads/ThreeCards';
import Comments from './PostComments';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ShowCardSpread() {
  const { cardSpreadId } = useParams();
  const [spread, setSpread] = useState(null);
  useEffect(() => {
    axios.get('/api/v1/spreads/' + cardSpreadId).then((res) => {
      console.log('res hererer', res);
      setSpread(res.data);
    });
  }, []);
  useEffect(() => {}, [spread]);
  if (!spread) return null;
  console.log('spread', spread);
  const {
    title,
    user: { username, bio },
    description,
    createdAt,
  } = spread;
  const Description = () => {
    return (
      <Box
        sx={{
          width: { xs: 400, sm: 500, md: 600, lg: 700, xl: 800 },
          display: 'flex',
          flexDirection: 'column',
          mt: '2rem',
          mb: '2rem',
          fontFamily: 'Oswald',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: '2rem',
          }}
        >
          <Avatar style={{ width: 100, height: 100 }} />
          <Box
            sx={{
              ml: '2rem',
              height: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              fontFamily: 'Oswald',
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Oswald',
              }}
            >
              {username}
            </Typography>
            <Typography variant='h6'>{bio}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold', fontFamily: 'Oswald' }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          width: { xs: 400, sm: 500, md: 600, lg: 700, xl: 800 },
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h3'
          style={{
            fontWeight: 'bold',
            color: 'purple',
            marginBottom: '1rem',
            fontFamily: 'Oswald',
          }}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography
          variant='h6'
          sx={{ fontFamily: 'Oswald', mb: '1rem', color: 'purple' }}
        >
          {createdAt
            .split('T')
            .map((el, idx) => {
              if (idx === 1) {
                return el.slice(0, 5);
              }
              return el;
            })
            .join(' ')}
        </Typography>
      </Box>
      <ThreeCards />
      <Description />
      <Comments />
    </Box>
  );
}

export default ShowCardSpread;
