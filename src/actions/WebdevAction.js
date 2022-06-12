import {SubCategoryWebDev,SubCategoryMobDev,SubCategoryGameDev,SubCategoryDataDesignDev,SubCategorySoftwareDev} from "../api";
import { authAxios } from "../api";
import axios from "axios";

//action creater
//Here we are using the action creater to fetch the data from the api
export const loadWebdevCourses = () => async (dispatch) => {
  //fetch the development data from the api
  const SubCategoryWebDevData = await authAxios.get(SubCategoryWebDev());
  const SubCategoryMobDevData = await authAxios.get(SubCategoryMobDev());
  const SubCategoryGameDevData = await authAxios.get(SubCategoryGameDev());
  const SubCategoryDataDesignDevData = await authAxios.get(SubCategoryDataDesignDev());
  const SubCategorySoftwareDevData = await authAxios.get(SubCategorySoftwareDev());
  
//   const MostReviewed = await authAxios.get(getMostReviewedURL());
  //dispatch the data to the reducer
  dispatch({
    type: "LOAD_WEB_DEVELOPMENT_COURSES",
    payload: {
      WebdevelopmentSubcategory: SubCategoryWebDevData.data.results,
      MobdevelopmentSubcategory: SubCategoryMobDevData.data.results,
      GamedevelopmentSubcategory: SubCategoryGameDevData.data.results,
      DatadesigndevelopmentSubcategory:SubCategoryDataDesignDevData.data.results,
      SoftwaredevelopmentSubcategory:SubCategorySoftwareDevData.data.results,
    },
  });
};
