import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const { actions, reducer } = cartUiSlice;
export const { toggle } = actions;
export default reducer;
