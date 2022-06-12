import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Wyl = () => {
  const { courseDetail, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <WhatYLStyle>
          <h3>What You'll learn</h3>
          <div>
            <ul className="text">
              {courseDetail.what_you_will_learn_data.items.map((name) => (
                <li key={name}>🔖📖{name} </li>
              ))}
            </ul>
          </div>
        </WhatYLStyle>
      )}
    </>
  );
};
const WhatYLStyle = styled.div`
  border: 3px solid #33332d;
  box-shadow: -5px 5px #33332d;
  width: 100%;
  margin: auto;
  font-size: 1.5rem;
  h3 {
    padding: 1rem 1rem 0 2rem;
    width: 90%;
  }

  .text {
    padding: 2rem;
  }
  .text li {
    list-style: none;
    line-height: 1.5rem;
    font-weight: lighter;
  }
`;
export default Wyl;
