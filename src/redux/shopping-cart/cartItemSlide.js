import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
};

export const cartItemSlide = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItems = action.payload;

      const duplicate = findItem(state.value, newItems);
      console.log(initialState);
      if (duplicate.length > 0) {
        state.value = deleteItem(state.value, newItems);

        state.value = [
          ...state.value,
          {
            ...newItems,
            id: duplicate[0].id,
            quantity: newItems.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItems,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItem(state.value)));
      console.log(state.value);
    },
    updateItems: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = deleteItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem(
          "cartItems",
          JSON.stringify(sortItem(state.value))
        );
      }
    },
    removeItem: (state, action) => {
      const itemDelete = action.payload;
      state.value = deleteItem(state.value, itemDelete);
      localStorage.setItem("cartItems", JSON.stringify(sortItem(state.value)));
    },
  },
});

const findItem = (arr, item) =>
  arr.filter(
    (e) =>
      e.slug === item.slug && e.color === item.color && e.size === item.size
  );

const deleteItem = (arr, item) =>
  arr.filter(
    (e) =>
      e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );

const sortItem = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addItems, updateItems, removeItem } = cartItemSlide.actions;

export default cartItemSlide.reducer;
