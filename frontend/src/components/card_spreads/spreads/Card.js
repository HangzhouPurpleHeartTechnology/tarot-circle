import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

function Card({ card, height, width }) {
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
