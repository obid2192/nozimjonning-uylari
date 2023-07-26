import React, { useEffect, useState } from "react";
import CaruselTmg from "./caruseImg";
import { useParams } from "react-router-dom";
import Button from "../Generic/Button";
import {
  CardTitle,
  Container,
  Img,
  Img1,
  HouseAddress,
  Metro,
  Header,
  MetroIcon,
  MetroTitle,
  MetroText,
  HouseText,
  TextRight,
  TextLeft,
  Content,
  TextHeader,
} from "./style";

export const HouseItem = () => {
  const params = useParams();
  console.log("House Item");

  const { REACT_APP_BASE_URL: url } = process.env;

  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((value) =>
        setData(...value.results.filter((item) => item.id == params.id.slice(3)))
        
      );
  }, [params?.id]);
  // let res = data.find(x => {x.id === params.id.slice(3)});
  console.log(data);
  return (
    <>
      <Container>
        <CardTitle>
          <h1>Malumot raqami {params?.id}</h1>
          <Header>O'zbegim</Header>
          <Metro>
            <MetroIcon>M</MetroIcon>
            <MetroTitle>Chilonzor</MetroTitle>
            <MetroText>10 min 1.5 km</MetroText>
          </Metro>
          <HouseAddress>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            dolorem iste ea soluta
          </HouseAddress>
          <Img1>
            <CaruselTmg photo={data} />
          </Img1>
          <TextHeader>Kelishilgan</TextHeader>
          <Content>
            <HouseText>
              <TextRight>Topshirish muddati:</TextRight>
              <TextLeft>2024-02-06</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Kvadrat:</TextRight>
              <TextLeft>
                600 <sup>2</sup>
              </TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Qavatlar:</TextRight>
              <TextLeft>16</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Topshirish muddati:</TextRight>
              <TextLeft>2024-02-06</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Kvadrat:</TextRight>
              <TextLeft>
                600 <sup>2</sup>
              </TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Qavatlar:</TextRight>
              <TextLeft>16</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Topshirish muddati:</TextRight>
              <TextLeft>2024-02-06</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Kvadrat:</TextRight>
              <TextLeft>
                600 <sup>2</sup>
              </TextLeft>
            </HouseText>
          </Content>
          <Button width="100%">Menga qo'ng'iroq qiling </Button>
          <br />
          <Button type="light" width="100%">
            Dasturchi bilan aloqa
          </Button>
        </CardTitle>
        <Img>
          {/* <CaruselTmg photo={data} /> */}
        </Img>
      </Container>
    </>
  );
};

export default HouseItem;
