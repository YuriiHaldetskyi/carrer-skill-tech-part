import { configureStore } from "@reduxjs/toolkit";
import { tweetsReducer } from "./tweetSlice";

export const store = configureStore({
  reducer: { tweets: tweetsReducer },
});
