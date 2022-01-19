import React, { useState } from 'react';
import Card from '../../card_spreads/spreads/Card';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {},
  cardSpreads: {
    fontSize: 5,
    display: 'flex',
    padding: 10,
    padding: 20,
    borderRadius: 5,
    boxShadow: '1px 1px 5px 1px rgba(145, 3, 234, 0.1)',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
}));

function DrawCard() {
  const classes = useStyles();
  const [cardSpread, setCardSpread] = useState(0);
  const cardBack =
    'https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png';
  return (
    <div style={{ marginTop: '2rem', marginBottom: '12rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div
            className={classes.cardSpreads}
            onClick={() => setCardSpread(0)}
            style={{ border: cardSpread === 0 ? `1px solid purple` : '' }}
          >
            <Card card={cardBack} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            className={classes.cardSpreads}
            onClick={() => setCardSpread(1)}
            style={{ border: cardSpread === 1 ? `1px solid purple` : '' }}
          >
            {[0, 1].map((el, idx) => (
              <Card card={cardBack} key={idx} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            onClick={() => setCardSpread(2)}
            className={classes.cardSpreads}
            style={{ border: cardSpread === 2 ? `1px solid purple` : '' }}
          >
            {[0, 1, 2].map((el, idx) => (
              <Card card={cardBack} key={idx} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DrawCard;
