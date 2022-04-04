import React, { useState, useEffect } from 'react';
import TitleAndDescription from './TitleAndDescription';
import DrawCard from './DrawCard';
import { Button, Box } from '@mui/material';
import { useStyles } from '../BottomDrawer';
import DrawFromDeck from './DrawFromDeck';
import axios from 'axios';

function DrawCardLogic({ drawCardSection, title, setTitle, description, setDescription, cardSpread, setCardSpread, finished, setFinished}) {
  const classes = useStyles();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${
          cardSpread + 1
        }`
      )
      .then((res) => setCards(res.data))
      .catch((err) => console.error(err));
  }, [cardSpread]);

  if (drawCardSection === 0) {
    return (
      <div style={{ position: 'relative' }}>
        <h1 className={classes.bottomDrawerTitle}>
          Simply Describe Your Question and Start Drawing
        </h1>
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
        cards={cards}
        finished={finished}
        setFinished={setFinished}
      />
    );
  }
}

export default DrawCardLogic;
