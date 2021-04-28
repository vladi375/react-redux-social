import axios from "axios";
import actionTypes from "./actionTypes";

export const changePhoneActionCreator = (payload) => {
  return {
    type: actionTypes.CHANGE_PHONE,
    payload,
  };
};

// обычно не называют ...ActionCreator -
//лучшая практика называть просто changePassword

export const changePassword = (payload) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload,
  };
};

export const login = (phone, password) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_START,
    });

    try {
      const response = await axios.post("http://localhost:3001/auth/sign-in", {
        phone: phone, // или просто phone
        password: password, // или просто password
      });
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: err.response.data,
      });
    }
  };
};
