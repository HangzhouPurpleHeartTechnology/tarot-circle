import React from 'react';
import cardArray from './CardArray';
import { makeStyles } from '@material-ui/core';
import Drawer from '../cards/JournalDrawer';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  title: {
    fontSize: 70,
    fontWeight: 800,
    marginBottom: 10,
  },
  img: {
    marginTop: '1rem',
    maxWidth: 200,
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  info: {
    maxWidth: 300,
  },
  cardInfo: {
    minWidth: 600,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    '&>div': {
      marginTop: 30,
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  },
  drawer: {
    position: 'fixed',
    right: 10,
    top: 100,
    opacity: 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&>button': {
      color: 'purple',
    },
    '&:hover': {
      opacity: 1,
    },
    '&>div': {
      width: 1,
      height: 100,
      backgroundColor: 'purple',
    },
    [theme.breakpoints.up('md')]: {
      right: 50,
      top: 150,
    },
  },
}));

function SingleCardExplanation({ cardIndex }) {
  const classes = useStyles();
  cardIndex = cardIndex || 9;
  console.log('cardArray', cardArray);
  console.log('cardIndex', cardIndex);
  let cardInfo = { ...cardArray[cardIndex] };
  console.log(cardArray, cardIndex, cardArray[cardIndex]);

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <div />
        <Drawer />
        <div />
      </div>
      <h1>
        <span className={classes.title}>
          {cardIndex} {cardInfo.name}
        </span>
      </h1>
      <div className={classes.cardInfo}>
        <img src={cardInfo.url} className={classes.img}></img>
        <div className={classes.info}>
          <h2>
            upright:{' '}
            <span style={{ marginLeft: '1rem', fontWeight: 100 }}>
              {cardInfo.upright}
            </span>
          </h2>
          <h2>
            reversed:
            <span style={{ marginLeft: '1rem', fontWeight: 100 }}>
              {cardInfo.reversed}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SingleCardExplanation;
