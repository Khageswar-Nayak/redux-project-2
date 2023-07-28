import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: {},

  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      state.items = action.payload;
      state.totalQuantity++;
    },
    removeCart(state, action) {},
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
