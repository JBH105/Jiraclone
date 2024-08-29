import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { prefSlice } from "./slices/prefSlice";

const store = configureStore({
  reducer: {
    prefrence: prefSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
export default store;
