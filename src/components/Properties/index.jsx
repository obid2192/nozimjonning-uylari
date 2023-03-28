import React, {useState, useEffect} from "react";
import { Container, ReadMore } from "./style";
import HouseCard from "../HouseCard";
// import { Navigate } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";

export const Properties = () => {
  const [item, setItem] = useState([])
  const [viseblit, setVisiblet] = useState(9)
  // const navigate = Navigate()
  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect (() => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(json => setItem(json))
  }, [url])
  // const { search } = useLocation();
  // const navigate = useNavigate();
  // const request = useRequest();

//   useEffect(() => {
//     request({ url: `/houses/list${search}` }).then((res) =>
//       setData(res?.data || [])
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search]);

  // const onClick = (id) => {
    // navigate(`/properties/${id}`);
    // alert(`Cardning Id raqami ${id}`)
    // console.log(`Cardning Id raqami ${id}`);
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
              // onClick={onClick(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
      <ReadMore onClick={showMoreItem}>Yana ko'rish</ReadMore>
    </React.Fragment>
  );
};

export default Properties;
