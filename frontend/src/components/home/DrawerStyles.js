import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
  },
  bottomList: {
    width: 'auto',
    height: '95vh',
  },
  drawerContent: {
    padding: 50,
    fontFamily: 'Oswald',
    position: 'relative',
    height: '100%',
  },
  drawerTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#760BD6',
    marginBottom: '10vh',
  },
  closeButton: {
    border: '1px solid red',
    width: 50,
    height: 50,
    padding: 15,
    borderRadius: 999,
    position: 'fixed',
    bottom: 30,
    left: 30,
    backgroundColor: 'white',
  },
  closeBarButton: {
    width: '100%',
    height: 80,
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    boxShadow: '1px 1px 3px 1px rgba(255, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  divider: {
    width: 200,
  },
  menuItem: {
    color: '#760BD6',
    cursor: 'pointer',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: '-5vh',
    left: 0,
    right: 0,
    width: '10vh',
    height: '10vh',
    margin: '0 auto',
    backgroundColor: 'red',
    border: '5px solid #fff',
    '&:hover': {
      backgroundColor: 'pink',
    },
  },
  bottomDrawerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    color: '#760BD6',
    position: 'relative',
    fontFamily: 'Oswald',
  },
  bottomDrawerTitle: {
    maxWidth: 350,
    textAlign: 'center',
  },
}));

export default useStyles;
