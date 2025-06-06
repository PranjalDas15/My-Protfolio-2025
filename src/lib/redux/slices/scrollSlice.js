import { createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        scroll: 0
    },
    reducers: {
        setScrollPosition(state, action) {
            state.scroll = action.payload;
        }
    }
})

export const { setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;