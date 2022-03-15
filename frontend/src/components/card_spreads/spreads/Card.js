import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

function Card({ card, height, width }) {
  card =
    card ||
    'https://res.cloudinary.com/willwang/image/upload/v1613426943/%E5%91%BD%E8%BF%90%E4%B9%8B%E8%BD%AE_okxnco.png';
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      backgroundImage: `url(${card})`,
      width: width ? width : '8rem',
      height: height ? height : '14rem',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  }));
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default Card;
