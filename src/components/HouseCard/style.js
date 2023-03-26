import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  height: 490px;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
export const Img = styled.div`
  width: 100%;
  height: 210px;
`;

export const Content = styled.div`
  padding: 10px;
`;
export const Header = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Metro = styled.div`
  display: flex;
  align-items: center;
`;
export const MetroIcon = styled.div`
  color: black;
  font-weight: 800;
  font-size: 25px;
`;
export const MetroTitle = styled.div`
  color: red;
  margin: 0 15px;
`;
export const MetroText = styled.div`
  font-size: 13px;
  color: gray;
`;
export const HousePrice = styled.div`
  display: flex;
  align-items: center;
`;
export const Xona = styled.div`
  color: black;
  font-weight: 600;
  font-style: 20px;
`;
export const Price = styled.div`
  margin: 0 20px;
`;
export const HouseAddress = styled.div`
  color: gray;
  margin-bottom: 5px;
`;
export const Bank = styled.div`
  width: 100px;
  height: 20px;
  border-radius: 10px;
  background-color: green;
`;

export const Line = styled.div`
width: 100%;
height: 1px;
background-color: gray;
`
export const CardFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  height: 20px;
  margin-top: 5px;
`;
export const FooterText = styled.div``;
export const FooterButton = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  height: 25px;
  width: 120px;
  background-color: yellow;
`;
