import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import CategoryReducer from "./categoryReducer";
import SubCategoryReducer from "./SubcategoryReducer";

const rootReducer = combineReducers({
  detail: detailReducer,
  Categories: CategoryReducer,
  WebDevSubCategory:SubCategoryReducer,
  // MobDevSubCategory:SubCategoryReducer,

});
export default rootReducer;
