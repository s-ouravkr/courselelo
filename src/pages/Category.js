import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import Development from "./development";
import styled from "styled-components";
// import Development from "./development";
import WebDevelopment from "../components/WebDevComponent";
import Developmentbanner from "../img/Development-bann.jpg";
const Category = ()=>{
   return(
       <>
       <Categorystyle>
       <h1 className="tag">Development</h1>
            <img src={ Developmentbanner} className="banner"/>
           
            <h2>Web Development</h2>
            {/* <Development/> */}
            <WebDevelopment/>
            
            
       </Categorystyle>
          
       </>  
   )
}
const Categorystyle = styled.div`
${'' /* margin-top:4rem; */}
width:80%;
margin:4rem auto;

.tag{
    padding:2rem 0;
    ${'' /* text-align:center; */}
}

h2{
    padding-bottom:.5rem;
    border-bottom:2px solid black;
}


.banner{
    width:60%;
    margin:0 20%;
}

`


export default Category;