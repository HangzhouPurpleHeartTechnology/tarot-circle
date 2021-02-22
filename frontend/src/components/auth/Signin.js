import React, { useState } from 'react';
import { connect } from 'react-redux'
import Background from '../Background';
import { Fade, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './AuthStyles';
import Input from '../input/Input';
import { actionSignin } from '../../actions/SessionActions'

const SigninForm = ({ signinUser }) => {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => {
    const userData = { username, password };
    signinUser(userData);
  }
  return (
    <Fade in timeout={400}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.avatar}>
          <img src='https://res.cloudinary.com/willwang/image/upload/v1613345187/logoChars_b8vvmj.png' />
        </div>
        <div className={classes.inputs}>
          <label className={classes.labels}>
            <h2>USERNAME:</h2>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
        <Button type="submit" variant='contained' className={classes.button} onClick={(e) => { e.preventDefault(); handleSubmit() }} >
          SIGN IN
        </Button>
      </form>
    </Fade>
  );
};

const mapStateToProps = state => ({ sessionErrors: state.errors })
const mapDispatchToProps = dispatch => ({ signinUser: (user) => dispatch(actionSignin(user)) })
const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(SigninForm);

function Signin() {
  return <Background component={SigninContainer} />;
}
export default Signin;
