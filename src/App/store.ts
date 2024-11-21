import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Features/todoSlice";
import { loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    /* There is an error here related to types. The code functions with 
    this error but with more time I would want to figure out why it is there */
    todo: todosReducer,
  },
  preloadedState,
});

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
