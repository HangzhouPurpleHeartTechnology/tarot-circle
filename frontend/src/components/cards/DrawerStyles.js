import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
  },
  fullList: {
    width: 'auto',
  },
  button: {
    width: 100,
    backgroundColor: '#760BD6 !important',
    color: 'white !important',
    fontWeight: 800,
    paddingLeft: 20,
    paddingRight: 20,
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
    color: 'purple',
  },
  closeButton: {
    border: '1px solid red',
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 999,
    position: 'absolute',
    left: 30,
    bottom: 50,
    backgroundColor: 'white',
  },
}));

export default useStyles;
