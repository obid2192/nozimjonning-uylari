import * as React from "react";
import { Container, FilterBox, FilterTitle, Img } from "./style";
import img from "../../assets/img/house2.png";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
// import { Input } from '../Generic';
import "./style.css";
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

  const names = ["1 xona", "2 xona", "3 xona", "4 xona", "5 xona", "6 xona"];

  const [age, setAge] = React.useState("");
  const ariaLabel = { "aria-label": "description" };
  const handleChange = (event) => {
    setAge(event.target.value);
    // console.log(event.target.value);
  };
  // -------------------------------------
  const [personName, setPersonName] = React.useState([]);

  const handleChangee = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Container>
        <Img src={img} />
        <FilterTitle>O'zbekiston bo'ylab uy elonlari</FilterTitle>
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
                <MenuItem value="Kvartera">Kvartera</MenuItem>
                <MenuItem value="Kottej">Kottej</MenuItem>
                <MenuItem value="Havli">Havli</MenuItem>
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
                <MenuItem value="Sotib olish">Sotib olish</MenuItem>
                <MenuItem value="Ijaraga">Ijaraga</MenuItem>
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
                <MenuItem value="Yangi binolarda">Yangi binolarda</MenuItem>
                <MenuItem value="Qayta sotish">Qayta sotish</MenuItem>
                <MenuItem value="Eski binolar">Eski binolar</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-multiple-checkbox-label">Xona</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Input
            onChange={handleChange}
            placeholder="......dan so'm"
            inputProps={ariaLabel}
          />
          <Input
            onChange={handleChange}
            placeholder="......gacha so'm"
            inputProps={ariaLabel}
          />
        <button onClick={handleChangee}>Submit</button>
        </FilterBox>
      </Container>
    </>
  );
};
export default Filter;
