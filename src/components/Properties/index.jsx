import React, {useState, useEffect} from "react";
import { Container, ReadMore } from "./style";
import HouseCard from "../HouseCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";

export const Properties = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [item, setItem] = useState([])
  const [viseblit, setVisiblet] = useState(9)

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setItem(json))
  }, [])
  // const { search } = useLocation();
  // const navigate = useNavigate();
  // const request = useRequest();

  // useEffect(() => {
  //   request({ url: `/houses/list${search}` }).then((res) =>
  //     setData(res?.data || [])
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search]);

  // const onSelect = (id) => {
  //   navigate(`/properties/${id}`);
  // };
const showMoreItem = () => {
  setVisiblet((prevValue) => prevValue + 9 )
}
  return (
    <React.Fragment>
      <div className="info" style={{ textAlign: "center" }}>
        Yangi qurulayotgan uylar
      </div>
      <Container>
        {item.slice(0, viseblit).map((value) => {
          return (
            <HouseCard
              // onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
      <ReadMore onClick={showMoreItem}>Read More</ReadMore>
    </React.Fragment>
  );
};

export default Properties;
