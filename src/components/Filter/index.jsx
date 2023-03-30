import * as React from 'react';
import { Container, FilterBox, FilterTitle, Img } from './style'
import img from '../../assets/img/house2.png'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Input } from '../Generic';
 
export const Filter = () => {
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "1 xona",
  "2 xona",
  "3 xona",
  "4 xona",
  "5 xona",
  "6 xona"
];

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
// -------------------------------------
const [personName, setPersonName] = React.useState([]);

const handleChangee = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

  return (
    <Container>
      <Img src={img} />
      <FilterTitle>
        O'zbekiston bo'ylab uy elonlari
      </FilterTitle>
      <FilterBox>  
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Uy turi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Kvartera</MenuItem>
          <MenuItem value={20}>Kottej</MenuItem>
          <MenuItem value={30}>Havli</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sotib olish</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Sotib olish</MenuItem>
          <MenuItem value={20}>Kredetga</MenuItem>
          <MenuItem value={30}>Ijaraga</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bino turi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Yangi binolarda</MenuItem>
          <MenuItem value={20}>Qayta sotish</MenuItem>
          <MenuItem value={30}>Yangi bino va qayta sotish</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Xona</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChangee}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        <Input />
        <Input />
      </FormControl>
      </FilterBox>
    </Container>
  )
}
export default Filter;
