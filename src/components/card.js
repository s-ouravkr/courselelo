import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loadCourseDetail } from "../actions/detailAction";

function Card({ title, url, id, image, price, instructor }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadCourseDetail(id));
  };
  return (
    <CardsStyle onClick={loadDetailHandler}>
      <Link to={`/development/${url}`} style={{ textDecoration: "none" }}>
        <CardNew>
          <img src={image} alt="" />
          <div className="card-info">
          <h3>
            {title.length < 40 ? `${title}` : `${title.substring(0, 45)}...`}
          </h3>
          <p>{instructor} </p>
          <p>Rating: ⭐⭐⭐⭐⭐</p>
          <p>Price: {price}</p>

          {/* <button>Enroll</button> */}

          </div>
        </CardNew>
      </Link>
    </CardsStyle>
  );
}
const CardsStyle = styled.div`
  display: block;
  @media(max-width:500px){
    display:flex;
    flex-direction:column;
  }
`;
const CardNew = styled.div`
  width: 14rem;
  height: 17.4rem;
  margin-top: 1rem;
  border-radius: 5px;
  color: black;

  &:hover {
    -webkit-box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  button {
    width: 95%;
    border: none;
    height: 2rem;
    margin-top: 0.5rem;
  }
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 2px;
  }

  .card-info {
    padding-left: 0.6rem;
  }
  p {
    margin: 0.2rem 0;
  }
  h5 {
    margin: 0.5rem 0 0 0;
  }
  .card-info h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.1rem 0;
  }
  @media(max-width:500px){
    width:100%;
    height:50%;
    display:flex;
    align-item:center;

    img{
      width:30%;
      ${'' /* height:20%; */}
    }
    .card-info{
      width:80%;
    }

  }
`;

export default Card;
