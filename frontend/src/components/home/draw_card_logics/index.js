import React, { useState, useEffect } from 'react';
import TitleAndDescription from './TitleAndDescription';
import DrawCard from './DrawCard';
import { Button, Box } from '@mui/material';
import { useStyles } from '../BottomDrawer';
import DrawFromDeck from './DrawFromDeck';

function DrawCardLogic({ handleClose }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardSpread, setCardSpread] = useState(0);
  const [drawCardSection, setDrawCardSection] = useState(0);
  useEffect(() => {
    console.log('card spread', cardSpread);
  }, [cardSpread]);

  if (drawCardSection === 0) {
    return (
      <div style={{ position: 'relative' }}>
        <h1 className={classes.bottomDrawerTitle}>
          Simply Describe Your Question and Start Drawing
        </h1>
        <Box sx={{ position: 'fixed', top: 105, right: 25 }}>
          <Button
            variant='outlined'
            color='secondary'
            disabled={!title || !description}
            onClick={() => setDrawCardSection(1)}
          >
            Confirm
          </Button>
        </Box>
        <TitleAndDescription
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        <DrawCard cardSpread={cardSpread} setCardSpread={setCardSpread} />
      </div>
    );
  } else {
    return (
      <DrawFromDeck
        cardSpread={cardSpread}
        setCardSpread={setCardSpread}
        title={title}
        description={description}
        handleClose={handleClose}
      />
    );
  }
}

export default DrawCardLogic;
