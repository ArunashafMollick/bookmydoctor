import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";

export const store = configureStore({
  reducer: {
    // loged: loginSlice.reducer,
    Auth: AuthSlice.reducer,
  },
});
