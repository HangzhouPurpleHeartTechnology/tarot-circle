import React from 'react';
import { Avatar, Card, CardMedia, CardContent } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './HomePageStyles';

const faces = [
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/Yizhe_Wang_ka3nzg.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/michael_chen_jljbuw.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278737/Rex_Gao_epgmo7.jpg',
];

export default function App() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            'https://res.cloudinary.com/willwang/image/upload/v1613349049/cards_e6btyx.png'
          }
          onClick={(e) => {
            e.nativeEvent.stopPropagation();
            history.push('/card/1');
          }}
        />
        <CardContent
          className={classes.content}
          onClick={() => history.push('/cardspreads/1')}
        >
          <h3 style={{ fontWeight: 'bold', color: '#5D5C58', fontSize: 18 }}>
            Tomorrow's Math Exam
          </h3>
          <p variant='caption'>
            I'm about to take a very import math exam tomorrow, don't know how
            the result would be. I'm super worried know. Can someone help me to
            see the cards I drew. Thanks.
          </p>
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
