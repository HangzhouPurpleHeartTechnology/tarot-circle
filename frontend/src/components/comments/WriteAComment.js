import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';

const WriteAComment = ({ spreadId }) => {
  const userId = useSelector((state) => state.session.user.id);
  const [comment, setComment] = useState('');
  const handleSubmit = () => {
    const data = {
      user: userId,
      comment: comment,
      spread: spreadId,
    };
    axios
      .post('/api/v1/comments', data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ mt: 2 }}>
      <TextField
      sx={{width: '70%'}}
        color='secondary'
        label='Your Comments'
        placeholder='Your Comments'
        variant='standard'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
            setComment('');
          }
        }}
      />
    </Box>
  );
};

export default WriteAComment;
