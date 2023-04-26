import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, patchUser } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tweetSlice = createSlice({
  name: "tweets",
  initialState: initialState,
  reducers: {
    setFollow(state, action) {
      for (const user of state.items) {
        if (user.id === action.payload) {
          user.isFollowing = !user.isFollowing;
          break;
        }
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(patchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.forEach((item) => {
          if (item.id !== action.payload.id) {
            return;
          }
          item.followers = action.payload.followers;
        });
      })
      .addCase(patchUser.rejected, handleRejected),
});

export const tweetsReducer = tweetSlice.reducer;
export const { setFollow } = tweetSlice.actions;
