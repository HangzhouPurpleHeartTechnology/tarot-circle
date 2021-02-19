import React from 'react';
import Input from '../../input/Input';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
  },
  input: {
    width: 400,
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
  },
}));

function TitleAndDescription() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>Title</h1>
        <Input
          className={classes.input}
          placeholder='a title to decribe the event you want to ask...'
        />
      </div>

      <label>
        <h1>Description</h1>
        <Input
          multiline
          rows={5}
          rowsMax={7}
          className={classes.input}
          placeholder='a simple description of the situation...'
        />
      </label>
    </div>
  );
}

export default TitleAndDescription;
