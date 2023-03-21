import React from 'react'
import { Felter } from '../Filter';
import { HouseCard } from '../HouseCard';
import Properties from '../Properties';
import {Container } from "./style";

export const Home1  = () => {
  return (
    <>
    <Container>
      <Felter />
      <Properties />
    </Container>
    </>
  )
}
