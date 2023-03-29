// import React, { useEffect, useState } from "react";
import CaruselTmg from "./caruseImg";
import { useParams } from "react-router-dom";
import Button from "../Generic/Button";
import {
  CardTitle,
  Container,
  Img,
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
  TextHeader
} from "./style";

// const { REACT_APP_BASE_URL: url } = process.env;

export const HouseItem = () => {
  const params = useParams();
  // console.log(params?.id);

  // useEffect(() => {
  //   // request({ url: `/houses/list/${params?.id}` }).then((res) =>
  //   //   setData (res?.data || [])
  //   // );
  //   fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, [params?.id]);

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
          <TextHeader>Kelishilgan</TextHeader>
          <Content>
            <HouseText>
              <TextRight>Topshirish muddati:</TextRight>
              <TextLeft>2024-02-06</TextLeft>
            </HouseText>
            <HouseText>
              <TextRight>Kvadrat:</TextRight>
              <TextLeft>600 <sup>2</sup></TextLeft>
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
              <TextLeft>600 <sup>2</sup></TextLeft>
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
              <TextLeft>600 <sup>2</sup></TextLeft>
            </HouseText>
            
          </Content>
          <Button width="100%">Menga qo'ng'iroq qiling </Button>
          <br />
          <Button type="light" width="100%">
            Dasturchi bilan aloqa
          </Button>
        </CardTitle>
        <Img>
          <CaruselTmg />
        </Img>
      </Container>
    </>
  );
};

export default HouseItem;
