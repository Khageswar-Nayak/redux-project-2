import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setCart(state, action) {
      console.log(action.payload);
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.items.find(
        (item) => item.title === newItem.title
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          title: newItem.title,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCart(state, action) {
      const cartItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.title === cartItem.title
      );
      state.totalQuantity--;
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - cartItem.price;
      } else {
        state.items = state.items.filter(
          (item) => item.title !== cartItem.title
        );
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
