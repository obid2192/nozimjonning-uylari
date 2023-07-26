import CaruselImg from "./caruseImg";

// import mertoLogo from '../../assets/logo/metrologo.png'
// import merto from '../../assets/logo/Metro.png'
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
  Icons,
  ImgTop,
  Line,
  Metro,
  MetroIcon,
  MetroText,
  MetroTitle,
  Price,
  TextCard,
  Xona,
  TopText,
  Naxlari,
} from "./style";
export const HouseCard = ({ data = {}, gap, onClick }) => {
  const { user } = data;


  return (
    <div style={{ display: "flex" }} >
    <Container gap={gap} className="container">
      <ImgTop>
        <TopText>Topshiriladi 2024 yil</TopText>

        <Icons.Love favorite={"favorite"} />
      </ImgTop>
      <Img>
        <CaruselImg photo={data} />
      </Img>
      <TextCard onClick={onClick} >
        <Content>
          <Bank>Ipateka {data.user.total_likes}%</Bank>
          <Header>{data.user.first_name}</Header>
          <Metro>
            <MetroIcon>M</MetroIcon>
            <MetroTitle>Chilonzor</MetroTitle>
            <MetroText>10 min 1.5 km</MetroText>
          </Metro>
          <HouseAddress>{user.bio}</HouseAddress>
          <Naxlari>
            <HousePrice>
              <Xona>1 xona</Xona>
              <Price>
                35.45 m<sup>2</sup> ....... 300 000 000 so'm
              </Price>
            </HousePrice>
            <HousePrice>
              <Xona>2 xona</Xona>
              <Price>
                54.12 m<sup>2</sup> ....... 500 000 000 so'm
              </Price>
            </HousePrice>
            <HousePrice>
              <Xona>3 xona</Xona>
              <Price>
                71.95 m<sup>2</sup> ....... 700 000 000 so'm
              </Price>
            </HousePrice>
           
          </Naxlari>
        </Content>
        <Line></Line>
        <CardFooter>
          <FooterText>{user.name}</FooterText>
          <FooterButton color={data.color}>+99899182192 </FooterButton>
        </CardFooter>
      </TextCard>
    </Container>
    </div>
  );
};

export default HouseCard;
