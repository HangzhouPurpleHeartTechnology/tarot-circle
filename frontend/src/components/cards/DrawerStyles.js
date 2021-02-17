import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  list: {
    width: 400,
    height: '100%',
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
    position: 'absolute',
    bottom: 30,
  },
}));

export default useStyles;
