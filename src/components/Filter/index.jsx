import React from 'react'
import img from '../../assets/img/house2.png'

import { Container, FilterBox, FilterTitle, Img, Input, Select } from './style'

export const Filter = () => {
  return (
    <Container>
      <Img src={img} />
      <FilterTitle>
        O'zbekiston bo'ylab uy elonlari
      </FilterTitle>
      <FilterBox>
        <Select name="" id="">
          <option value=""> 1 xona</option>
          <option value=""> 2 xona</option>
          <option value=""> 3 xona</option>
          <option value=""> 4 xona</option>
          <option value=""> 5 xona</option>
          <option value=""> 5+</option>
        </Select>
        <Select name="" id="">
          <option value="">Dom</option>
          <option value="">Kattej</option>
          <option value="">Havli</option>
        </Select>
        <Select name="" id="">
          <option value="">Yangi bino</option>
          <option value="">Eski bino</option>
          
        </Select>
        <Select name="" id="">
          <option value="">200 000 000 so'm</option>
          <option value="">300 000 000 so'm</option>
          <option value="">400 000 000 so'm</option>
          <option value="">500 000 000 so'm</option>
          <option value="">1 000 000 000 so'm</option>          
        </Select>
        <Input type='text'  placeholder="...so'mma dan"/>
        <Input type='text'  placeholder="...so'mma gacha"/>
        
      </FilterBox>
    </Container>
  )
}
export default Filter;