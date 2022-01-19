import React from 'react';
import { makeStyles } from '@mui/styles';
const background =
  'https://res.cloudinary.com/willwang/image/upload/v1613457487/cardback_ikgn08.png';
const useStyles = makeStyles((theme) => ({
  root: {},
}));

function FoldCard() {
  return (
    <div className={classes.root}>
      <img src={background} alt='card back' />
    </div>
  );
}

export default FoldCard;
