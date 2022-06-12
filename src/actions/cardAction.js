import { developmentCategoryURL, getMostReviewedURL } from "../api";
import { authAxios } from "../api";

//action creater
//Here we are using the action creater to fetch the data from the api
export const loadDevelopmentCategory = () => async (dispatch) => {
  //fetch the development data from the api
  const devData = await authAxios.get(developmentCategoryURL());
  const MostReviewed = await authAxios.get(getMostReviewedURL());
  //dispatch the data to the reducer
  dispatch({
    type: "LOAD_DEVELOPMENT_CATEGORY",
    payload: {
      developmentCategory: devData.data.results,
      MostReviewedCourses: MostReviewed.data.results,
    },
  });
};
