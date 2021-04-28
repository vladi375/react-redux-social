import actionTypes from "../actions/actionTypes";

const initialState = {
  profileData: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.GET_PROFILE_DATA) {
    return {
      ...state,
      profileData: action.payload,
    };
  }
  if (action.type === actionTypes.ERROR_GETTING_PROFILE_DATA) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export default reducer;
