import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between; */

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 600px) {
    margin-top: 10px;  
    padding: 0 10px ;  
  }
`;

export const ReadMore = styled.button`
margin-top: 20px;
width: 100%;
height: 40px;
font-size: 20px;
border-radius: 5px;
outline: none;
color: white;
letter-spacing: 2px;
border: none;
background-color: darkslategrey;
@media (max-width: 600px) {
      font-size: 15px;
  
    
  }
`
