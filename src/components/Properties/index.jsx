import React, {useState, useEffect} from "react";
import { Container, ReadMore } from "./style";
import HouseCard from "../HouseCard";
import { useNavigate, useLocation} from "react-router-dom";

export const Properties = () => {
  const [viseblit, setVisiblet] = useState(9)
  const navigate = useNavigate();
  const { search } = useLocation();
console.log(search);
  // const { REACT_APP_BASE_URL: url } = process.env;
  // useEffect (() => {
  //   fetch(`${url}`)
  //   .then(response => response.json())
  //   .then(json => setItem(json))
  // }, [])
  const [data, setData] = useState([])
  const YOUR_ACCESS_KEY = "lhn5Z3awPZLfxukFk0iuY4So1V_kE33hSIaFJ4mquZY";
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=2&query=house&client_id=${YOUR_ACCESS_KEY}&count=1`)
      .then((res) => res.json())
      .then((value) => setData(value.results));
  }, []);

  console.log("Properties");
    const onSelect = (id) => {
      navigate(`/houseitem/:id${id}`);
    };

const showMoreItem = () => {
  setVisiblet((prevValue) => prevValue + 3 )
}
  return (
    <React.Fragment>
      <div className="info" style={{ textAlign: "center" }}>
        Yangi qurulayotgan uylar
      </div>
      <Container>
        {data.slice(0, viseblit).map((value) => {          
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
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
