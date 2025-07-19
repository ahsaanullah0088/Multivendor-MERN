import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase("LoadSellerRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.seller = action.payload;
      state.error = null;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.seller = null;
    })
    .addCase("updateUserInfoRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("updateUserInfoSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase("updateUserInfoFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateUserAddressRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("updateUserAddressSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase("updateUserAddressFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteUserAddressRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("deleteUserAddressSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase("deleteUserAddressFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("getAllUsersRequest", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("getAllUsersSuccess", (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    })
    .addCase("getAllUsersFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
