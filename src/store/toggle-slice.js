import { createSlice } from "@reduxjs/toolkit";

const initialToggle = { toggle: false };

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialToggle,
  reducers: {
    isToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const toggleAuction = toggleSlice.actions;

export default toggleSlice.reducer;
