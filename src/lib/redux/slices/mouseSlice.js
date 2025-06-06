import { createSlice } from "@reduxjs/toolkit";

export const mouseSlice = createSlice({
  name: "mouse",
  initialState: {
    isHover: false,
    isOpen: false,
    text: null,
    cursorImage: null,
  },
  reducers: {
    setIsHover(state, action) {
      state.isHover = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setCursorImage(state, action) {
      state.cursorImage = action.payload;
    },
  },
});

export const { setIsHover, setIsOpen, setText, setCursorImage } = mouseSlice.actions;
export default mouseSlice.reducer;
