import React from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const SortCharts = () => {
  const [age, setAge] = React.useState('');
  return (
    <Box>
      Sorting Charts
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='1'>星</InputLabel>
          <Select
            id='1'
            value={age}
            onChange={(el) => setAge(el.target.value)}
            label='Star/Planet'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'sun'}>太阳</MenuItem>
            <MenuItem value={'moon'}>月亮</MenuItem>
            <MenuItem value={'mars'}>火星</MenuItem>
          </Select>
        </FormControl>
        <FormGroup
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked />} label='和' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='拱' />
          <FormControlLabel control={<Checkbox defaultChecked />} label='刑' />
        </FormGroup>
        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='1'>星</InputLabel>
          <Select
            id='1'
            value={age}
            onChange={(el) => setAge(el.target.value)}
            label='Star/Planet'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'sun'}>太阳</MenuItem>
            <MenuItem value={'moon'}>月亮</MenuItem>
            <MenuItem value={'mars'}>火星</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SortCharts;
