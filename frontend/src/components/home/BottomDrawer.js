import React, { useState } from 'react';

import { Drawer, Button, Fab, Box } from '@mui/material';
// import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import Content from './draw_card_logics';
export const useStyles = makeStyles((theme) => ({
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    border: '0.5vh solid #fff',
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
    maxWidth: 550,
    fontWeight: 'bold',
    marginBottom: '5vh',
  },
}));

export default function TemporaryDrawer({ note }) {
  const classes = useStyles();
  const [drawCardSection, setDrawCardSection] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [finished, setFinished] = useState(false);
  const [cardSpread, setCardSpread] = useState(0);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowDrawer(open);
  };

  const List = ({ anchor }) => (
    <div className={classes.bottomList}>
      <CardNote note={note} anchor={anchor} />
      <Box className={classes.closeBarButton}>
        <Button
          color='warning'
          onClick={() => setShowDrawer(false)}
          variant='outlined'
          sx={{ ml: 4 }}
        >
          cancel
        </Button>
        <Button
          color='secondary'
          variant='outlined'
          sx={{ mr: 4 }}
          disabled={drawCardSection === 0 ? !title && !description : !finished}
          onClick={() =>
            drawCardSection === 0
              ? setDrawCardSection(1)
              : setDrawCardSection(0)
          }
        >
          {drawCardSection === 0 ? 'confirm' : 'publish'}
        </Button>
      </Box>
    </div>
  );

  const CardNote = () => {
    return (
      <div className={classes.bottomDrawerContent}>
        <Content
          handleClose={toggleDrawer(false)}
          drawCardSection={drawCardSection}
          setDrawCardSection={setDrawCardSection}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          finished={finished}
          setFinished={setFinished}
          cardSpread={cardSpread}
          setCardSpread={setCardSpread}
        />
      </div>
    );
  };

  return (
    <div>
      <Fab className={classes.fabButton} onClick={toggleDrawer(true)}>
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          Draw
        </Box>
      </Fab>
      <Drawer
        docked={'false'}
        anchor={'bottom'}
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        <List anchor={'bottom'} />
      </Drawer>
    </div>
  );
}
