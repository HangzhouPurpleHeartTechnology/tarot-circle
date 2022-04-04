import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '../../card_spreads/spreads/Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
}));

const GridItem = ({
  index,
  cardSpread,
  cards,
  setOri,
  ori,
  finished,
  setFinished,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [cardPic, setCardPic] = useState(
    'https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png'
  );
  useEffect(() => {
    if (ori === cardSpread) setFinished(true);
  }, [ori]);
  return (
    <Grid item>
      <Item
        xs={2}
        sm={1}
        md={1}
        lg={1}
        onClick={() => {
          if (finished) return;
          setIsFlipped((isFlipped) => {
            if (isFlipped) {
              setCardPic(
                require(`../../../img/card_imgs/${
                  cards?.cards[ori + 1].name_short
                }.jpg`)
              );
              return false;
            }
          });
          setOri((ori) => ori + 1);
        }}
      >
        <Card card={cardPic} height='7em' width='4em' index={index}></Card>
      </Item>
    </Grid>
  );
};

const DrawFromDeck = ({ cardSpread, cards, finished, setFinished }) => {
  const [ori, setOri] = useState(-1);

  if (!cards) return null;
  console.log('cardskasdkfjalsdfjasl', cards)

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
            setOri={setOri}
            ori={ori}
            finished={finished}
            setFinished={setFinished}
          />
        ))}
      </Grid>
    </div>
  );
};

export default DrawFromDeck;
