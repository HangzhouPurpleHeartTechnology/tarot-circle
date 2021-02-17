import React from 'react';

import { Drawer, IconButton, List, ListItem, Divider } from '@material-ui/core';
import { Close, Menu as MenuIcon } from '@material-ui/icons';
import useStyles from './DrawerStyles';

export default function TemporaryDrawer({ note }) {
  note = note || {
    cardName: 'Hermit',
    notes:
      "this is a personal note, and I wrote this note to record my personal understandings of a single card, this might be a long note and might be a short note, should be scrollable, editable, but don't need to section it. we will also need a update time",
    updatedAt: new Date().toString(),
  };
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
          <ListItem style={{ cursor: 'pointer' }}>
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
          <ListItem style={{ cursor: 'pointer' }}>
            <h3 className={classes.menuItem}>But</h3>
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
      <Drawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </React.Fragment>
  );
}
