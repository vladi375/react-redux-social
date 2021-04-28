import actionTypes from "../actions/actionTypes";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.GET_USERS) {
    return {
      ...state,
      users: action.payload,
    };
  }

  return state;
};

export default reducer;
