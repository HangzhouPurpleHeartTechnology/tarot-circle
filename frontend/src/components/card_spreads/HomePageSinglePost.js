import React from 'react';
import { Avatar, Card, CardMedia, CardContent } from '@mui/material';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './HomePageStyles';

const faces = [
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/Yizhe_Wang_ka3nzg.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/michael_chen_jljbuw.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278737/Rex_Gao_epgmo7.jpg',
];

export default function HomePagePost({ spread, commenters }) {
  const { _id } = spread;
  const { title, description, cards, created_at, user } = spread;
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        onClick={() => navigate('/cardspreads/' + _id)}
      >
        <CardMedia
          className={classes.media}
          image={
            'https://res.cloudinary.com/willwang/image/upload/v1613349049/cards_e6btyx.png'
          }
        />
        <CardContent className={classes.content}>
          <h3 style={{ fontWeight: 'bold', color: '#5D5C58', fontSize: 18 }}>
            {title}
          </h3>
          <p variant='caption'>{description}</p>
          <Divider className={classes.divider} light />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>commenters</h3>
            <div>
              {faces.map((face) => (
                <Avatar className={classes.avatar} key={face} src={face} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
