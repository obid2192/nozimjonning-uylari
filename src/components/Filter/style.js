import styled from 'styled-components'


export const Container = styled.div`
display: flex;
border-radius: 10px;
position: relative;
justify-content: center;
width: 100%;
height: 350px;
background-color: blue;
margin: 50px 0;
`
export const FilterBox = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 260px;
width: 80%;
padding: 20px;
border: 1px solid black;
position: relative;
z-index: 2;
`
export const Select = styled.select`
height: 30px;
`
export const FilterTitle = styled.div`
color: black;
font-family: sans-serif;
position: absolute;
z-index: 3;
font-size: 40px;
font-weight: 600;
margin-top: 50px;
`
export const Input = styled.input`
height: 30px;
margin: 0 5px; 
padding: 0 5px;
`
export const Img = styled.img`
position: absolute;
border-radius: 10px;
width: 100%;
height: 100%;
`