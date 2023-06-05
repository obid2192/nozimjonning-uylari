import React, { useRef } from "react";
import { Container, FilterBox, FilterTitle, Img, Input, Select } from "./style";
import img from "../../assets/img/house2.png";
import "./style.css";
import { uzeReplace } from "../../hooks/useReplace";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

export const Filter = () => {
  let url = useSearchParams();
  console.log(url.search);
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const dan = useRef();
  const gacha = useRef();

  const searchHandler = ({ target }) => {
    navigate(`${location?.pathname}${uzeReplace(target.name, target.value)}`);
  };
  const Search = () => {
    alert("Hozircha qidiruv qismi tayyor emas");
  };

  return (
    <>
      <Container>
        <Img src={img} />
        <FilterTitle>O'zbekiston bo'ylab uy elonlari</FilterTitle>
        <FilterBox>
          {/* <Select
            onChange={searchHandler}
            name="page"
            defaultValue={query.get("pege") || 1}
          >
            <option value="">Yo'q</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
          </Select>
          <Select
            onChange={searchHandler}
            name="query"
            defaultValue={query.get("query") || "house"}
          >
            <option value="">Yo'q</option>
            <option value="coding">Coding</option>
            <option value="offise">Offise</option>
          </Select> */}
          <Select
            onChange={searchHandler}
            name="miqdori"
            defaultValue={query.get("miqdori") || ""}
          >
            <option value="">Hammasi</option>
            <option value="Sotib olish">Sotib olish </option>
            <option value="Ijaraga">Ijaraga</option>
          </Select>
          <Select
            onChange={searchHandler}
            name="uyturi"
            defaultValue={query.get("uyturi") || ""}
          >
            <option value="">Hammasi</option>
            <option value="Kuvartera">Kuvartera</option>
            <option value="Katej">Katej</option>
            <option value="Havli">Havli</option>
          </Select>
          <Select
            onChange={searchHandler}
            name="holati"
            defaultValue={query.get("holati") || ""}
          >
            <option value="">Hammasi</option>
            <option value="Yangi bino">Yangi bino</option>
            <option value="Qayta sotish">Qayta sotish</option>
            <option value="Yangi bino va qayta sotish">
              Yangi bino va qayta sotish
            </option>
          </Select>
          <Input
            defaultValue={query.get("dan")}
            onChange={searchHandler}
            ref={dan}
            name="dan"
            placeholder="......dan so'm"
          />
          <Input
            defaultValue={query.get("gacha")}
            onChange={searchHandler}
            ref={gacha}
            name="gacha"
            placeholder="......gacha so'm"
          />

          <button onClick={Search}>Qidirish</button>
        </FilterBox>
      </Container>
    </>
  );
};
export default Filter;
