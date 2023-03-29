import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 100px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const Img = styled.div`
  max-width: 750px;
  height: 520px;
  background-color: green;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: none;
  }
`;
export const Img1 = styled.div`
  max-width: 750px;
  display: none;
  height: 520px;
  background-color: green;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: block;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
  width: 370px;
  height: 520px;
  background-color: darkslategray;
  @media (max-width: 600px) {
    height: auto;
    width: 100%;
  }
`;
export const Header = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
  color: slategray;
`;

export const Metro = styled.div`
  display: flex;
  align-items: center;
`;
export const MetroIcon = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: black;
`;
export const MetroTitle = styled.div`
  color: red;
  margin: 0 15px;
`;
export const MetroText = styled.div`
  font-size: 13px;
  color: gray;
`;
export const HouseAddress = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 5px;
`;
export const Content = styled.div`
  width: 100%;
  height: 300px;
`;
export const HouseText = styled.div`
  display: flex;
  align-items: center;
`;
export const TextRight = styled.div`
  color: black;
  font-weight: 600;
  width: 180px;
  margin: 2px 0;
`;
export const TextLeft = styled.div`
  font-size: 14px;
  color: darkorange;
`;
export const TextHeader = styled.div`
  color: darkgray;
  font-weight: 600;
  font-size: 25px;
  margin: 10px 0;
`;
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
