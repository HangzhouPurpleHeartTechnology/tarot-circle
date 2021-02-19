import React from 'react';
import { makeStyles } from '@material-ui/core';
const bg =
  'https://res.cloudinary.com/willwang/image/upload/v1613426943/%E5%91%BD%E8%BF%90%E4%B9%8B%E8%BD%AE_okxnco.png';

function Card({ card }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${card || bg})`,
      width: '12em',
      height: '21em',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  }));
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default Card;
