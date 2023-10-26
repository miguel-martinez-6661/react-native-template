import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter-slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
