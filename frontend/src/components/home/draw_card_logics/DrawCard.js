import React from 'react';
import Card from '../../card_spreads/spreads/Card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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
  },
}));

function DrawCard() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '2rem', marginBottom: '12rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className={classes.cardSpreads}>
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.cardSpreads}>
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.cardSpreads}>
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
            <Card card='https://res.cloudinary.com/willwang/image/upload/v1613623978/cardback_niolpi.png' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DrawCard;
