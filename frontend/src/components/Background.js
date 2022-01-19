import React from 'react';
import { makeStyles } from '@mui/styles';

const backgroundImage =
  'https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Background({ component: Component, zIndex, opacity }) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ zIndex, opacity }}>
      <Component />
    </div>
  );
}
