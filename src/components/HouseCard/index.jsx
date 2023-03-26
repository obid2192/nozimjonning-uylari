import CaruselImg from "./caruseImg";
import { Container, Img} from "./style";
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
      
    </Container>
    // </div>
  );
};

export default HouseCard;
