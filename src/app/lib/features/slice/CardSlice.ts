import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  cart: Array<any>;
  amount: number;
  totalAmount: number;
  totalPrice: number;
}

const initialState: CardState = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
};

export const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<any>) => {
      console.log("state, action", state, action);

      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            ...action.payload,
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
      return (state.cart += action.payload);
    },

    removeFromCart: (state, action: PayloadAction<any>) => {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }

      return (state.cart = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCard, removeFromCart } = CardSlice.actions;
export default CardSlice.reducer;
