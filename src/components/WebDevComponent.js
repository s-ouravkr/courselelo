import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWebdevCourses } from "../actions/WebdevAction";
import Card from "../components/card";
import styled from "styled-components";
import { TiChevronRight } from "react-icons/ti";


const WebDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWebdevCourses());
  }, [dispatch]);
  const { SubCategoryWebDev,SubCategoryMobDev,SubCategoryGameDev,SubCategoryDataDesignDev,SubCategorySoftwareDev,isLoading} = useSelector(
    (state) => state.WebDevSubCategory
  );
 
  

  return (
      <>
      {!isLoading && ( 
    <div className="dev">
   
      <DevStyle>
        {SubCategoryWebDev.map((course) => (
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
     <ButtonStyle><button>Explore More <TiChevronRight/></button></ButtonStyle>

      <h2>Android Development</h2>
      <DevStyle>
        {SubCategoryMobDev.map((course) => (
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
      <ButtonStyle><button>Explore More <TiChevronRight/></button></ButtonStyle>

      <h2>Game Development</h2>
      <DevStyle>
        {SubCategoryGameDev.map((course) => (
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
      <ButtonStyle><button>Explore More <TiChevronRight/></button></ButtonStyle>

      <h2>No-Code Development</h2>
      <DevStyle>
        {SubCategoryDataDesignDev.map((course) => (
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
      <ButtonStyle><button>Explore More <TiChevronRight/></button></ButtonStyle>
      <h2>Software Development</h2>

      <DevStyle>
        {SubCategorySoftwareDev.map((course) => (
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
      <ButtonStyle><button>Explore More <TiChevronRight/></button></ButtonStyle>
    </div>
    )}
   
    </>
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
const ButtonStyle = styled.div`
 display:flex;
 justify-content:end;
 right:10%;

 button{
   box-shadow: rgb(51, 51, 45) -3px 5px;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
    color: rgb(0, 0, 0);
    background-color: white;
    padding: 0.6rem 1rem;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(51, 51, 45);
    border-image: initial;
    cursor:pointer;
 }

`
export default WebDevelopment;
