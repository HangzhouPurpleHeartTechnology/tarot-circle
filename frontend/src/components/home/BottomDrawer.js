import React from 'react';

import { Drawer, Button, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Content from './draw_card_logics';
import useStyles from './DrawerStyles';

export default function TemporaryDrawer({ note }) {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowDrawer(open);
  };

  const list = (anchor) => (
    <div className={classes.bottomList}>
      <CardNote note={note} anchor={anchor} />
      <Button
        variant='outlined'
        color='secondary'
        className={classes.closeBarButton}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        CLOSE
      </Button>
    </div>
  );

  const CardNote = () => {
    return (
      <div className={classes.bottomDrawerContent}>
        <h1 className={classes.bottomDrawerTitle}>
          Simply Describe Your Question and Start Drawing
        </h1>
        <Content />
      </div>
    );
  };

  return (
    <div>
      <Fab className={classes.fabButton} onClick={toggleDrawer('bottom', true)}>
        <Add style={{ color: 'white' }} />
      </Fab>
      <Drawer
        docked={false}
        anchor={'bottom'}
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        {list('bottom')}
      </Drawer>
    </div>
  );
}
