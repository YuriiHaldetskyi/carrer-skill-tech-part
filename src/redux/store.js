import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: { tweets: tweetsReducer, filter: filtersReducer },
});
