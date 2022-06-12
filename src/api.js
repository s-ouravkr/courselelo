import axios from "axios";

export const accessToken =
  "ZE1PeDJkanp6OEVMRUhiaVkyZmRQOU5tSkFiNE4xc0NhdlVzYTI5djpzekVKdEtjdlFKSEpQTWRDOU92OU9CbUxPeUtrelBBcmphSGMzUWhhZjJLOW9ZbkV4QjJBTWNVVjlyemlhaUU5V0JmR1V1OEVycmQ5ajJkSmhnWnY4OGhqV2xQek1DRmVFeUlLZ3ByZWIxNDM1U1pxSEdZWDJhN1l2Ym5EY2FPeQ==";
const apiURL = "https://www.udemy.com/";
export const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: "*/*",
    Authorization: `Basic ${accessToken}`,
  },
});

//development category url fetch
export const developmentCategoryURL = () =>
  `api-2.0/courses/?page=1&page_size=10&category=Development`;

//most reviewed courses all mix category
export const getMostReviewedURL = () =>
  `api-2.0/courses/?page=1&page_size=10&price=price-free&ordering=most-reviewed`;

//course Detail url
export const courseDetail = (courseId) =>
  `https://www.udemy.com/api-2.0/courses/${courseId}/?fields[course]=@default,title,images,headline,description,what_you_will_learn_data,rating`;

// export const courseDetail = (courseId) =>
//   `https://www.udemy.com/api-2.0/courses/${courseId}/?fields[course]=@all`;

export const SubCategoryWebDev =()=>
`/api-2.0/courses/?page=1&page_size=15&subcategory=Web%20Development&price=price-free`;

export const SubCategoryMobDev =()=>
`/api-2.0/courses/?page=2&page_size=15&subcategory=Mobile%20Development`;
//Game Development courses
export const SubCategoryGameDev=()=>
  `/api-2.0/courses/?page=1&page_size=15&subcategory=Game%20Development&price=price-free`;

  // data design and development
  export const SubCategoryDataDesignDev=()=>`/api-2.0/courses/?page=1&page_size=15&subcategory=No-Code%20Development&price=price-free`;

  // software development
  export const SubCategorySoftwareDev=()=> `/api-2.0/courses/?page=1&page_size=15&subcategory=Software%20Development%20Tools&price=price-free`;