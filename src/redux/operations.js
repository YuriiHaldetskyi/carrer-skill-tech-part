import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64470e4a7bb84f5a3e378a37.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const result = await axios.get("/tweets");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUser = createAsyncThunk(
  "users/patchFollows",
  async (tweet, thunkAPI) => {
    try {
      const result = await axios.put(`/tweets/${tweet.id}`, {
        followers: tweet.isFollowing
          ? tweet.followers - 1
          : tweet.followers + 1,
        isFollowing: !tweet.isFollowing,
      });
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
