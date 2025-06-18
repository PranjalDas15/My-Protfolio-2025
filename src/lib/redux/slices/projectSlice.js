import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    isProjectOpen: false,
    
  },
  reducers: {
    setIsProjectOpen(state, action) {
      state.isProjectOpen = action.payload;
    }
  },
});

export const { setIsProjectOpen } = projectSlice.actions;
export default projectSlice.reducer;
