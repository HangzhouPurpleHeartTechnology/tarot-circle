import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Card({ card }) {
  const classes = useStyles();
  card = card || {
    image:
      'https://res.cloudinary.com/willwang/image/upload/v1613426943/%E5%91%BD%E8%BF%90%E4%B9%8B%E8%BD%AE_okxnco.png',
  };
  return <div className={classes.root}></div>;
}

export default Card;
