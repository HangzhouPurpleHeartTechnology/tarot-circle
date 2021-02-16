import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { width: '70%', height: '30%', backgroundImage:  },
}));

function SpreadCanvas() {
  const classes = useStyles();
  return <div className={classes.root}>

  </div>;
}

export default SpreadCanvas;
