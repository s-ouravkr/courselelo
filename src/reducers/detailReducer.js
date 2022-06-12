const initState = {
  courseDetail: {
    results: [],
  },
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_COURSE_DETAIL":
      return {
        ...state,
        courseDetail: action.payload.detailData,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;
