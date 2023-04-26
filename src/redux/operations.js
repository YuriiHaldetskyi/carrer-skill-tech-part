import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64470e4a7bb84f5a3e378a37.mockapi.io/";

export const fetchUsers = createAsyncThunk(
  "users/ferchAll",
  async (_, thunkAPI) => {
    try {
      const result = await axios.get("/users");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUser = createAsyncThunk(
  "users/patchFollows",
  async (user, thunkAPI) => {
    try {
      const result = await axios.put(`/users/${user.id}`, {
        followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
        isFollowing: !user.isFollowing,
      });
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
