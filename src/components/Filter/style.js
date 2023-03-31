import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 350px;
  margin: 50px 0;
  @media (max-width: 600px) {
    height: auto;
    border-radius: 0px;
    margin: 0;
  }
`;
export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  background-color: grey;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 260px;
  width: 100%;
  padding: 20px;
  position: relative;
  /* z-index: 2; */
  @media (max-width: 600px) {
    margin: 100px 10px 10px 10px;
  }
`;
export const Select = styled.select`
  height: 30px;
`;
export const FilterTitle = styled.div`
  color: black;
  font-family: sans-serif;
  position: absolute;
  /* z-index: 1; */
  font-size: 40px;
  font-weight: 600;
  margin-top: 50px;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;
export const Input = styled.input`
  height: 30px;
  margin: 0 5px;
  padding: 0 5px;
`;
export const Img = styled.img`
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    height: auto;
    border-radius: 0px;
  }
`;
