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
  const { name, email } = data;

  // const save = (event) => {
  //   event?.stopPropagation();
  //   fetch(
  //     `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (favorite) res?.success && message.warning("Successfully disliked");
  //       else res?.success && message.info("Successfully liked");
  //       state.refetch && state.refetch();
  //     });
  // };

  return (
    // <div style={{ display: "flex" }} onClick={onClick}>
    <Container gap={gap} className="container">
      <ImgTop>
        <TopText>Topshiriladi 2024 yil</TopText>

        <Icons.Love favorite={"favorite"} />
      </ImgTop>
      <Img>
        <CaruselImg />
      </Img>
      <TextCard>
        <Content>
          <Bank>Ipateka 16%</Bank>
          <Header>O'zbegim</Header>
          <Metro>
            <MetroIcon>M</MetroIcon>
            <MetroTitle>Chilonzor</MetroTitle>
            <MetroText>10 min 1.5 km</MetroText>
          </Metro>
          <HouseAddress>{name}</HouseAddress>
          <Naxlari>
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
          </Naxlari>
        </Content>
        <Line></Line>
        <CardFooter>
          <FooterText>{email}</FooterText>
          <FooterButton>+99899182192 </FooterButton>
        </CardFooter>
      </TextCard>
    </Container>
    // </div>
  );
};

export default HouseCard;
