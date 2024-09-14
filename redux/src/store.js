import { createStore, combineReducers } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import userReducer from "./features/users/userSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
