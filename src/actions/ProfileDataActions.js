import axios from "axios";
import actionTypes from "./actionTypes";

export const getProfileData = (props) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/${props.match.params.index}`
      );

      dispatch({
        type: actionTypes.GET_PROFILE_DATA,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.ERROR_GETTING_PROFILE_DATA,
        payload: err.response.data,
      });
    }
  };
};
