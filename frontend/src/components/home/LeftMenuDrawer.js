import React from 'react';

import { Drawer, IconButton, List, ListItem, Divider } from '@mui/material';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { makeStyles, createStyles } from '@mui/styles';
const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);

const LeftMenuDrawer = ({ note }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  note = note || {
    cardName: 'Hermit',
    notes:
      "this is a personal note, and I wrote this note to record my personal understandings of a single card, this might be a long note and might be a short note, should be scrollable, editable, but don't need to section it. we will also need a update time",
    updatedAt: new Date().toString(),
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={classes.list}>
      <CardNote note={note} anchor={anchor} />
      <IconButton
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Close color='secondary' className={classes.closeButton} />
      </IconButton>
    </div>
  );

  const CardNote = ({ note, anchor }) => {
    return (
      <div className={classes.drawerContent}>
        <div className={classes.drawerTitle}>
          <h1 style={{ fontWeight: 100 }}>
            Welcome to <span style={{ fontWeight: 800 }}>Tarot Circle</span>
          </h1>
        </div>
        <List>
          <Divider className={classes.divider} />
          <ListItem
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/birthcharts');
              setState('left', false);
            }}
          >
            <h3 className={classes.menuItem}>Hello World</h3>
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem style={{ cursor: 'pointer' }}>
            <h3 className={classes.menuItem}>What is this</h3>
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem style={{ cursor: 'pointer' }}>
            <h3 className={classes.menuItem}>Another Level</h3>
          </ListItem>
          <Divider className={classes.divider} />
        </List>
      </div>
    );
  };

  return (
    <React.Fragment key={'left'}>
      <IconButton
        className={classes.button}
        onClick={toggleDrawer('left', true)}
        variant='contained'
        edge='start'
        color='inherit'
        aria-label='open drawer'
        className={classes.iconButtons}
        style={{
          backgroundColor: '#8EF5B7',
          color: 'black',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
};

export default LeftMenuDrawer;
