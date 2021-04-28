import { combineReducers } from "redux";

import SingInReducer from "./SignInReducer";
import UsersReducer from "./UsersReducer";
import ProfileReducer from "./ProfileReducer";

export default combineReducers({
  signIn: SingInReducer,
  users: UsersReducer,
  profile: ProfileReducer,
});
