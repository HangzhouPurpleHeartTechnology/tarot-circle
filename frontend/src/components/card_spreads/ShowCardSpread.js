import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ThreeCards from './spreads/ThreeCards';
import Comments from './PostComments';

function ShowCardSpread({ story }) {
  story ||= {
    title: 'Story Title',
    authorName: 'Will Wang',
    authorBio: 'May the force be with you.',
    description: `I'm about to take a very import math exam tomorrow, don't know how the result would be. I'm super worried know. Can someone help me to see the cards I drew. Thanks.`,
    publishedAt: '2020-05-01 15:30 PM',
  };
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
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '2rem' }}
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
              {story.authorName}
            </Typography>
            <Typography variant='h6'>{story.authorBio}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'Oswald' }}>
            {story.description}
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
          {story?.title.toUpperCase()}
        </Typography>
        <Typography
          variant='h6'
          sx={{ fontFamily: 'Oswald', mb: '1rem', color: 'purple' }}
        >
          {story.publishedAt}
        </Typography>
      </Box>
      <ThreeCards />
      <Description />
      <Comments />
    </Box>
  );
}

export default ShowCardSpread;
