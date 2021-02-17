import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, Fade } from '@material-ui/core';
import Background from '../Background';

const useStyles = makeStyles((theme) => ({
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 800,
    [theme.breakpoints.up("md")]: {
      fontSize: 100,
      fontWeight: 800,
    }
  },
}));
const Welcome = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.welcome}>Welcome to TAROT CIRCLE</Typography>
  );
};

function Landing() {
  const [disp, setDisp] = useState(true);
  const [zIndex, setZIndex] = useState(999);
  useEffect(() => {
    setTimeout(() => {
      setDisp((prev) => !prev);
      setZIndex(-1);
    }, 1000);
  }, []);
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
