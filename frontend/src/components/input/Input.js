import { InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
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
      boxShadow: `purple 0 0 0 0.01rem`,
    },
  },
}));

export default BootstrapInput;
