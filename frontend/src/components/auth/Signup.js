import React, { useState } from "react";
import Background from "../Background";
import { Fade, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./AuthStyles";
import Input from "../input/Input";
import { connect } from "react-redux";
import { actionSignup } from "../../actions/SessionActions";

const SignupForm = ({ signupUser }) => {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const handleSubmit = () => {
    const userData = { username, phoneNumber: phone, password, password2: confirmPassword }
    const errorsData = { username: '', phone: '', password: '', confirm: '' }
    if (password.length < 6) errorsData.password = 'Password must be at least 6 characters'
    if (username.length < 5) errorsData.username = 'Username must be at least 5 characters'
    if (phone.length < 10) errorsData.phone = 'Phone must be at least 10 characters'
    if (password !== confirmPassword) errorsData.confirm = 'Password and confirmation must match'
    if (errorsData.username || errorsData.phone || errorsData.password) {
      setErrors(errorsData);
    } else {
      signupUser(userData)
    }
  }

  return (
    <Fade in timeout={400}>
      <div className={classes.signupRoot}>
        <div className={classes.avatar}>
          <img src="https://res.cloudinary.com/willwang/image/upload/v1613345187/logoChars_b8vvmj.png" />
        </div>
        <div className={classes.inputs}>
          <label className={classes.labels}>
            <h2>USERNAME:</h2>
            <Input placeholder="At least 6 chars" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <p className={classes.errors}>{errors.username}</p>
          <label className={classes.labels}>
            <h2>PHONE:</h2>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <p className={classes.errors}>{errors.phone}</p>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <p className={classes.errors}>{errors.password}</p>
          <label className={classes.labels}>
            <h2>PASSWORD:</h2>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <p className={classes.errors}>{errors.confirm}</p>
        </div>
        <p style={{ color: "purple" }}>
          Already have an account ?{" "}
          <span style={{ textDecoration: "underline", color: "darkblue" }} onClick={() => history.push("/signin")}>
            SIGN IN
          </span>
        </p>
        <Button variant="contained" className={classes.button} onClick={handleSubmit}>
          SIGN UP
        </Button>
      </div>
    </Fade>
  );
};

const mapDispatchToProps = dispatch => ({
  signupUser: user => dispatch(actionSignup(user))
});

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm);

function Signup() {
  return <Background component={SignupFormContainer} />;
}

export default Signup;
