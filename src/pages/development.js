import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDevelopmentCategory } from "../actions/cardAction";
import Card from "../components/card";
import styled from "styled-components";

const Development = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDevelopmentCategory());
  }, [dispatch]);
  const { developmentCategory, MostReviewedCourses } = useSelector(
    (state) => state.Categories
  );

  return (
    <div className="dev">
      <DevStyle>
        {developmentCategory.map((course) => (
          <Card
            title={course.title}
            url={course.published_title}
            key={course.id}
            id={course.id}
            image={course.image_240x135}
            price={course.price}
            instructor={course.visible_instructors[0].display_name}
          />
        ))}
      </DevStyle>
      <h2>Most Reviewed</h2>
      <DevStyle>
        {MostReviewedCourses.map((course) => (
          <Card
            title={course.title}
            url={course.published_title}
            key={course.id}
            id={course.id}
            image={course.image_240x135}
            price={course.price}
            instructor={course.visible_instructors[0].display_name}
          />
        ))}
      </DevStyle>
    </div>
  );
};

//styling
const DevStyle = styled.div`
  position:relative;
  margin: 2rem auto;
  
  height:20.5rem;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(14rem, 1fr))[auto-fill];
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1rem;
  grid-auto-flow: column;
  
  gap: 1rem;
  overflow-x: scroll;
  overflow: auto;
  
  &::-webkit-scrollbar{
      display:none;
  }
  @media(max-width:500px){
    display:flex;
    flex-direction:column;
    height:25rem;
    
  }
}

`;
export default Development;
