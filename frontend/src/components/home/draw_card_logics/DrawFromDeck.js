import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../card_spreads/spreads/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
              setCardSpread((cardSpread) => {
                console.log(
                  'cards',
                  cards.cards,
                  cardSpread,
                  cards?.cards[cardSpread]
                );
                setCardPic(
                  require(`../../../img/card_imgs/${cards?.cards[cardSpread].name_short}.jpg`)
                );
                return cardSpread - 1;
              });
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

const DrawFromDeck = ({
  cardSpread,
  setCardSpread,
  title,
  description,
  handleClose,
}) => {
  const [ori, setOri] = useState(-1);
  useEffect(() => {
    setOri(cardSpread);
  }, []);

  const [cards, setCards] = useState([]);
  const user = useSelector((state) => state.session.user.id);
  const handlePublish = () => {
    const data = {
      title,
      description,
      user,
      cardSpread: ori,
      cards: cards?.cards.map((el) => el.name_short),
    };
    axios
      .post('/api/v1/spreads/', data)
      .then((res) => {
        console.log('res data', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log('numbers', cardSpread + 1);
    axios
      .get(
        `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${
          cardSpread + 1
        }`
      )
      .then((res) => setCards(res.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    console.log('cards', cards);
  }, [cards]);

  const cardArray = [...Array(78).keys()];
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
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
      <Button
        disabled={cardSpread !== -1}
        variant='outlined'
        color='secondary'
        style={{ position: 'fixed', bottom: 100, right: 50, zIndex: 100 }}
        onClick={(e) => {
          handlePublish();
          console.log('handle close', handleClose);
          handleClose(e);
        }}
      >
        publish
      </Button>
    </div>
  );
};

export default DrawFromDeck;
