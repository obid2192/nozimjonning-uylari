import React from 'react'
import { Felter } from '../Filter';
import { HouseCard } from '../houseCard';
import {Container } from "./style";

export const Home = () => {
  return (
    <>
    <Container>
      <Felter />
      <HouseCard />
    </Container>
    </>
  )
}
