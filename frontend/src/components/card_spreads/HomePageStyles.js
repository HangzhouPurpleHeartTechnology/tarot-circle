import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  card: {
    maxWidth: 350,
    minWidth: 300,
    transition: '0.3s',
    cursor: 'pointer',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '66.25%',
  },
  content: {
    textAlign: 'left',
    padding: '0 20px 0 20px',
  },
  divider: { marginTop: 20 },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -theme.spacing(1),
    },
  },
}));
export default useStyles;
