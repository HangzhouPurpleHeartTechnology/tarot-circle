import React from 'react';
import { Box, Typography } from '@mui/material';
import CommentItem from '../comments/CommentItem';
import WriteAComment from '../comments/WriteAComment';

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
      <WriteAComment />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Box>
  );
};

export default PostComments;
