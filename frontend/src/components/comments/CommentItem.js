import React from 'react';
import { Avatar, Box, Typography, Divider } from '@mui/material';

const CommentItem = () => {
  const comment = {
    body: 'asdfkjasldfjlaks fdask dfjlaks dflkas dfla sdlf askldf jaslkdalskd fklas dflkjas dfla sdlk asldf jaklsd ',
    user: {
      username: 'test user',
      avatar:
        'https://images.unsplash.com/photo-1647112294658-c7ec259710e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
  };
  const {
    body,
    user: { avatar },
  } = comment;
  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'row',
        mb: 2,
        maxWidth: 400,
      }}
    >
      <Avatar size='small' src={avatar} sx={{ mr: 2 }} />
      <Typography
        variant='body1'
        style={{ fontFamily: 'Oswald' }}
        sx={{
          p: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: '5px',
          lineHeight: 1.5,
        }}
      >
        {body}
      </Typography>
    </Box>
  );
};

export default CommentItem;
