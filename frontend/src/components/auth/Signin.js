import React from 'react';
import Background from '../Background';
import { Fade, Button } from '@material-ui/core';
import useStyles from './AuthStyles';
import Input from '../input/Input';

const SigninForm = () => {
  const classes = useStyles();
  return (
    <Fade in timeout={400}>
      <div className={classes.root}>
        <div className={classes.avatar}>
          <img src='https://res.cloudinary.com/willwang/image/upload/v1613345187/logoChars_b8vvmj.png' />
        </div>
        <div className={classes.inputs}>
          <label className={classes.labels}>
            <h2>USERNAME:</h2>
            <Input />
          </label>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input />
          </label>
        </div>
        <Button variant='contained' className={classes.button}>
          SIGN IN
        </Button>
      </div>
    </Fade>
  );
};

function Signin() {
  return <Background component={SigninForm} />;
}

export default Signin;
