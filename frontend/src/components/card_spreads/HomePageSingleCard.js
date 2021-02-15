import React from 'react';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const faces = [
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/Yizhe_Wang_ka3nzg.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278738/michael_chen_jljbuw.jpg',
  'https://res.cloudinary.com/willwang/image/upload/v1608278737/Rex_Gao_epgmo7.jpg',
];
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 350,
    minWidth: 300,
    transition: '0.3s',
    cursor: 'pointer',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '66.25%',
  },
  content: {
    textAlign: 'left',
    padding: '0 20px 0 20px',
  },
  divider: { marginTop: 20 },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -theme.spacing.unit,
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            'https://res.cloudinary.com/willwang/image/upload/v1613349049/cards_e6btyx.png'
          }
        />
        <CardContent className={classes.content}>
          <h3
            gutterBottom
            style={{ fontWeight: 'bold', color: '#5D5C58', fontSize: 18 }}
          >
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
