const initState = {
    SubCategoryWebDev: [],
    SubCategoryMobDev:[],
    SubCategoryGameDev:[],
    SubCategoryDataDesignDev:[],
    SubCategorySoftwareDev:[],
    isLoading:true,
  };
  
  const SubCategoryReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOAD_WEB_DEVELOPMENT_COURSES":
        return {
          ...state,
          SubCategoryWebDev: action.payload.WebdevelopmentSubcategory,
          SubCategoryMobDev: action.payload.MobdevelopmentSubcategory,
          SubCategoryGameDev: action.payload.GamedevelopmentSubcategory,
          SubCategoryDataDesignDev:action.payload.DatadesigndevelopmentSubcategory,
          SubCategorySoftwareDev:action.payload.SoftwaredevelopmentSubcategory,
          isLoading:false,
        };
        
      default:
        return { ...state };
    }
  };
  
  export default SubCategoryReducer;
  