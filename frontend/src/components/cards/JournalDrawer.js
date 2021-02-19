import React from 'react';

import { Button, Drawer, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';
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
    right: false,
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
        className={classes.closeButton}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Close color='secondary' />
      </IconButton>
    </div>
  );

  const CardNote = ({ note }) => {
    return (
      <div className={classes.drawerContent}>
        <div className={classes.drawerTitle}>
          <h1 style={{ fontWeight: 100 }}>
            My Note for <span style={{ fontWeight: 800 }}>{note.cardName}</span>
          </h1>
          <IconButton>
            <Edit />
          </IconButton>
        </div>
        <p>{note.updatedAt.split(' ').slice(0, 5).join(' ')}</p>
        <h3>{note.notes}</h3>
      </div>
    );
  };

  return (
    <React.Fragment key={'right'}>
      <Button
        className={classes.button}
        onClick={toggleDrawer('right', true)}
        variant='contained'
      >
        My Notes
      </Button>
      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
}
