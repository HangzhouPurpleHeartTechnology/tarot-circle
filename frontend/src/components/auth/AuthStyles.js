import { makeStyles } from '@material-ui/core';
const color = '#9103EA';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    height: 500,
    backgroundColor: 'white',
    transition: '0.3s',
    cursor: 'pointer',
    boxShadow: '0 8px 100px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 10px -12.125px rgba(0,0,0,0.3)',
    },
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    marginTop: '1.9rem',
    color: color,
    width: '75%',
  },
  avatar: {
    padding: 10,
    backgroundColor: color,
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    '&>img': {
      width: 70,
    },
  },
  labels: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
    backgroundColor: color,
    color: 'white',
    marginTop: '1rem',
    height: 50,
    marginBottom: '1rem',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      backgroundColor: color,
      opacity: '70%',
    },
  },
  signupRoot: {
    minWidth: 400,
    height: 600,
    backgroundColor: 'white',
    '&:hover': {
      boxShadow: '30px 20px 100px 3px rgba(0, 0, 0, 0.5)',
    },
    transition: 'all 0.5s ease-in-out',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
