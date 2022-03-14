import React, { useState } from 'react';
import TitleAndDescription from './TitleAndDescription';
import DrawCard from './DrawCard';
import { Button, Box } from '@mui/material';
import { useStyles } from '../BottomDrawer';

function DrawCardLogic() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardSpread, setCardSpread] = useState(0);
  const [drawCardSection, setDrawCardSection] = useState(0);

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
    return <div>Starting to Draw</div>;
  }
}

export default DrawCardLogic;
