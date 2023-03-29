// import React, { useEffect, useState } from "react";
import CaruselTmg from "./caruseImg";
import { useParams } from "react-router-dom";
import { CardTitle, Container, Img } from "./style";

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

        </CardTitle>
        <Img>
        <CaruselTmg />
        </Img>
      </Container>
    </>
  );
};

export default HouseItem;
