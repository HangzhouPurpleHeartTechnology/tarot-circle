import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../card_spreads/spreads/Card';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
}));
const GridItem = ({ index, cardSpread, setCardSpread, cards }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [cardPic, setCardPic] = useState(
    'https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png'
  );
  return (
    <Grid item>
      <Item
        xs={2}
        sm={1}
        md={1}
        lg={1}
        onClick={() => {
          if (cardSpread <= -1) return;
          setIsFlipped((isFlipped) => {
            if (isFlipped) {
              setCardSpread((cardSpread) => cardSpread - 1);
              setCardPic(cards[cardSpread]);
              return false;
            }
          });
        }}
      >
        <Card card={cardPic} height='7em' width='4em' index={index}></Card>
      </Item>
    </Grid>
  );
};

const DrawFromDeck = ({ cardSpread, setCardSpread }) => {
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
  }, []);

  const cardArray = [...Array(78).keys()];
  return (
    <Grid container style={{ width: '100%' }} spacing={1}>
      {cardArray.map((el) => (
        <GridItem
          key={el}
          index={el}
          cards={cards}
          cardSpread={cardSpread}
          setCardSpread={setCardSpread}
        />
      ))}
    </Grid>
  );
};

export default DrawFromDeck;
