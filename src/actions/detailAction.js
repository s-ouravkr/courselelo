import axios from "axios";
import { courseDetail } from "../api";

//loading the course detail function

export const loadCourseDetail = (courseId) => async (dispatch) => {
  //fetch the course detail
  dispatch({ type: "LOADING_DETAIL" });
  const detailData = await axios.get(courseDetail(courseId));

  dispatch({
    type: "LOAD_COURSE_DETAIL",
    payload: {
      detailData: detailData.data,
    },
  });
};
