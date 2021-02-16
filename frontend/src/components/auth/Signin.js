import React from 'react';
import Background from '../Background';
import { Fade, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './AuthStyles';
import Input from '../input/Input';

const SigninForm = () => {
  const history = useHistory();
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
        <p style={{ color: 'purple' }}>
          Don't have an account ?{' '}
          <span
            style={{
              color: 'darkblue',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onClick={() => history.push('/signup')}
          >
            SIGN UP
          </span>
        </p>
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
