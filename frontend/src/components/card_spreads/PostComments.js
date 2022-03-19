import React from 'react';
import { Box, Typography } from '@mui/material';
import CommentItem from '../comments/CommentItem';

const PostComments = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4' style={{ fontFamily: 'Oswald' }}>
        Comments
      </Typography>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Box>
  );
};

export default PostComments;
