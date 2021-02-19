import { InputBase, withStyles, fade } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #9103EA',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: "'Oswald', sans-serif",
    '&:focus': {
      boxShadow: `${fade('#9103EA', 0.25)} 0 0 0 0.2rem`,
    },
  },
}))(InputBase);

export default BootstrapInput;
