import React from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";

export const Properties = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  return (
    <React.Fragment>
      <div className="info" style={{ textAlign: "center" }}>
        Yangi qurulayotgan uylar
      </div>
      <Container>
        {data.map(() => {
          return (
            <HouseCard
              // onClick={() => onSelect(value.id)}
              // key={value.id}
              // data={value}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Properties;
