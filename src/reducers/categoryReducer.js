const initState = {
  developmentCategory: [],
  MostReviewedCourses: [],
};

const CategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_DEVELOPMENT_CATEGORY":
      return {
        ...state,
        developmentCategory: action.payload.developmentCategory,
        MostReviewedCourses: action.payload.MostReviewedCourses,
      };
    default:
      return { ...state };
  }
};

export default CategoryReducer;
