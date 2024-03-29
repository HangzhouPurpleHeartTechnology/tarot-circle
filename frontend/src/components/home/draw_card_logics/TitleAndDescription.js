import React from 'react';
import Input from '../../input/Input';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
  },
  input: {
    width: 400,
    [theme.breakpoints.up('md')]: {
      width: 700,
    },
  },
}));

function TitleAndDescription({ title, setTitle, description, setDescription }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1>Title</h1>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.input}
          placeholder='a title to decribe the event you want to ask...'
        />
      </div>

      <label>
        <h1>Description</h1>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={5}
          className={classes.input}
          placeholder='a simple description of the situation...'
        />
      </label>
    </div>
  );
}

export default TitleAndDescription;
