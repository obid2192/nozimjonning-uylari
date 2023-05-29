import React, {useState, useEffect} from "react";
import { Container, ReadMore } from "./style";
import HouseCard from "../HouseCard";
import { useNavigate, useParams} from "react-router-dom";

export const Properties = () => {
  const [item, setItem] = useState([])
  const [viseblit, setVisiblet] = useState(9)
  const params = useParams()
  const navigate = useNavigate();

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect (() => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(json => setItem(json))
  }, [])
  // const [data, setData] = useState([])
  // const id = 'O1oyybsdMz2mAse9jNQYvNSHkZb8RmO5XfbIRzCZuk0'
  // useEffect(() => {
  //   fetch(`https://api.unsplash.com/photos/random?client_id=${id}`)
  //     .then((res) => res.json())~
  //     .then((value) => setData(value));
  // }, [data]);
  console.log("Properties");

  
    const onSelect = (id) => {
      navigate(`/houseitem/:id${id}`);
      console.log(`Karta nomeri ${id}`);
      console.log(params);
    };

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
