import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Fab, IconButton } from '@material-ui/core';
import { Menu, Add, Search, MoreVert } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

const backgroundImage =
  'https://res.cloudinary.com/willwang/image/upload/v1613334443/Ori_naexbt.png';
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
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
  const location = useLocation();
  const classes = useStyles();

  if (location.pathname === '/signin' || location.pathname === '/signup')
    return null;

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            className={classes.iconButtons}
            style={{
              backgroundColor: '#8EF5B7',
              color: 'black',
            }}
          >
            <Menu />
          </IconButton>
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
          >
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
