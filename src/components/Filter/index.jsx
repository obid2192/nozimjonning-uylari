import React from "react";
import { Container, FilterBox, FilterTitle, Img, Input, Select } from "./style";
import img from "../../assets/img/house2.png";
import "./style.css";
// import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
export const Filter = () => {
  // const [data, setData] = useState();
  // const [search, setSearch] = useSearchParams();

  // const [age, setAge] = useState("");

  // -------------------------------------
  const handleChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <>
      <Container>
        <Img src={img} />
        <FilterTitle>O'zbekiston bo'ylab uy elonlari</FilterTitle>
        <FilterBox>
          <Select onChange={handleChange} name="xonalarsoni">
            <option value="Sotib olish">Sotib olish </option>
            <option value="Ijaraga">Ijaraga</option>
          </Select>
          <Select onChange={handleChange} name="xonalarsoni">
            <option value="Kuvartera">Kuvartera</option>
            <option value="Katej">Katej</option>
            <option value="Havli">Havli</option>
          </Select>
          <Select onChange={handleChange} name="xonalarsoni">
            <option value="Yangi bino">Yangi bino</option>
            <option value="Qayta sotish">Qayta sotish</option>
            <option value="Yangi bino va qayta sotish">Yangi bino va qayta sotish</option>
          </Select>

          <Input
            onChange={handleChange}
            placeholder="......dan so'm"
            name="dan"
          />
          <Input
            onChange={handleChange}
            placeholder="......gacha so'm"
            name="gacha"
          />
          <button onClick={handleChange}>Qidirish</button>
        </FilterBox>
      </Container>
    </>
  );
};
export default Filter;
