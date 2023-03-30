import React from 'react'
import { Filter } from '../Filter';
import Properties from '../Properties';

import {Container } from "./style";

export const HomePage  = () => {
  return (
    <>
    <Container>
    
            <Filter />
      <Properties />
    </Container>
    </>
  )
}
