import axios from "axios";
import actionTypes from "./actionTypes";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/users");

      dispatch({
        type: actionTypes.GET_USERS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.ERROR_GETTING_USERS,
        payload: err.response.data,
      });
    }
  };
};
