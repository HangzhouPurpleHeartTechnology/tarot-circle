import React, { useEffect, useState } from 'react';
import { Typography, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Background from '../Background';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  welcome: {
    color: 'white',
    fontSize: 50,
    fontWeight: 800,
    width: 300,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: 100,
      fontWeight: 800,
    },
  },
}));
const Welcome = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.welcome}>Welcome to TAROT CIRCLE</Typography>
  );
};

function Landing() {
  const isLoggedIn = useSelector((state) => state.session.isAuthenticated);
  const [disp, setDisp] = useState(true);
  const [zIndex, setZIndex] = useState(999);
  useEffect(() => {
    setTimeout(() => {
      setDisp((prev) => !prev);
      setZIndex(-1);
    }, 1000);
  }, []);
  if (isLoggedIn) {
    return null;
  }
  return (
    <Fade
      in={disp}
      timeout={{ enter: 0, exit: 1000 }}
      style={{ display: disp }}
    >
      <div>
        <Background component={Welcome} zIndex={zIndex} />
      </div>
    </Fade>
  );
}

export default Landing;
