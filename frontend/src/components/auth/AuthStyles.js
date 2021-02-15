import { makeStyles } from '@material-ui/core';
const color = '#9103EA';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 600,
    height: 400,
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
  inputs: {
    marginTop: '1.9rem',
    color: color,
    width: '50%',
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
    marginTop: '2rem',
    height: 50,
    marginBottom: '1rem',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      backgroundColor: color,
      opacity: '70%',
    },
  },
}));

export default useStyles;
