import CaruselImg from "./caruseImg";
import {
  Bank,
  CardFooter,
  Container,
  Content,
  FooterButton,
  FooterText,
  Header,
  HouseAddress,
  HousePrice,
  Img,
  Line,
  Metro,
  MetroIcon,
  MetroText,
  MetroTitle,
  Price,
  TextCard,
  Xona,
} from "./style";
export const HouseCard = ({ data = {}, gap, onClick }) => {
  // const {
  //   salePrice,
  //     houseDetails,
  //   address,
  //   city,
  //   country,
  //   description,
  //   category,

  // } = data;

  return (
    // <div style={{ display: "flex" }} onClick={onClick}>
    <Container gap={gap}>
      <Img>
        <CaruselImg />
      </Img>
      <TextCard>
        <Content>
          <Bank></Bank>
          <Header>O'zbegim</Header>
          <Metro>
            <MetroIcon>M</MetroIcon>
            <MetroTitle>Chilonzor</MetroTitle>
            <MetroText>10 min 1.5 km</MetroText>
          </Metro>
          <HouseAddress>
            Chilonzor tumani Farhod ko'chasi 8 dom 14 uy 2 padez
          </HouseAddress>
          <HousePrice>
            <Xona>1 xona</Xona>
            <Price>
              65.45 m<sup>2</sup> ....... 200 000 000 so'm
            </Price>
          </HousePrice>
          <HousePrice>
            <Xona>1 xona</Xona>
            <Price>
              65.45 m<sup>2</sup> ....... 200 000 000 so'm
            </Price>
          </HousePrice>
          <HousePrice>
            <Xona>1 xona</Xona>
            <Price>
              65.45 m<sup>2</sup> ....... 200 000 000 so'm
            </Price>
          </HousePrice>
          <HousePrice>
            <Xona>1 xona</Xona>
            <Price>
              65.45 m<sup>2</sup> ....... 200 000 000 so'm
            </Price>
          </HousePrice>
        </Content>
        <Line></Line>
        <CardFooter>
          <FooterText>Dasturchi Kampaniya</FooterText>
          <FooterButton>+99899182192 </FooterButton>
        </CardFooter>
      </TextCard>
    </Container>
    // </div>
  );
};

export default HouseCard;
