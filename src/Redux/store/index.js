import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers/job";
import mainReducer from "../reducers/index";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

// configureStore will set up the Redux Store for us!
const persistConfig = {
  key: "root",
  storage: localStorage,
  transfroms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  jobs: jobReducer,
  favoritejob: mainReducer,
  value: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
