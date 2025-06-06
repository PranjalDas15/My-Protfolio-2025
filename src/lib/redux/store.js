import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import mouseReducer from "./slices/mouseSlice";
import scrollReducer from "./slices/scrollSlice";
import projectReducer from "./slices/projectSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      mouse: mouseReducer,
      scroll: scrollReducer,
      project: projectReducer,
    },
  });
};
