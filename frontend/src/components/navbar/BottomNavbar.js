import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Fab, IconButton } from '@material-ui/core';
import { Menu, Add, Search, Person } from '@material-ui/icons';
import { useLocation, useHistory } from 'react-router-dom';
import LeftMenu from '../home/LeftMenuDrawer';

const backgroundImage =
  'https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png';
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#760BD6',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
  },
  grow: {
    flexGrow: 1,
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
  toolbar: {
    color: 'white',
  },
  iconButtons: {
    backgroundColor: 'red',
    marginLeft: '1rem',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));

export default function BottomAppBar() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  if (location.pathname === '/signin' || location.pathname === '/signup')
    return null;

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <LeftMenu />
          <Fab aria-label='add' className={classes.fabButton}>
            <Add style={{ color: 'white' }} />
          </Fab>
          <div className={classes.grow} />
          <IconButton color='inherit' className={classes.iconButtons}>
            <Search />
          </IconButton>
          <IconButton
            edge='end'
            color='inherit'
            className={classes.iconButtons}
            onClick={() => history.push('/signin')}
          >
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
