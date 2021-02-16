import React from 'react';
import Background from '../Background';
import { Fade, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './AuthStyles';
import Input from '../input/Input';

const SignupForm = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Fade in timeout={400}>
      <div className={classes.signupRoot}>
        <div className={classes.avatar}>
          <img src='https://res.cloudinary.com/willwang/image/upload/v1613345187/logoChars_b8vvmj.png' />
        </div>
        <div className={classes.inputs}>
          <label className={classes.labels}>
            <h2>USERNAME:</h2>
            <Input placeholder='At least 6 chars' />
          </label>
          <label className={classes.labels}>
            <h2>PHONE:</h2>
            <Input />
          </label>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input type='password' />
          </label>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input type='password' />
          </label>
        </div>
        <p style={{ color: 'purple' }}>
          Already have an account ?{' '}
          <span
            style={{ textDecoration: 'underline', color: 'darkblue' }}
            onClick={() => history.push('/signin')}
          >
            SIGN IN
          </span>
        </p>
        <Button variant='contained' className={classes.button}>
          SIGN UP
        </Button>
      </div>
    </Fade>
  );
};

function Signup() {
  return <Background component={SignupForm} />;
}

export default Signup;
