import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers/job";
import mainReducer from "../reducers/index";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  jobs: jobReducer,
  favoritejob: mainReducer,
  value: mainReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
