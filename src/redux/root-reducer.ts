import { combineReducers } from "@reduxjs/toolkit";
import theme from "./slices/theme";

export const rootReducer = combineReducers({
  theme
});