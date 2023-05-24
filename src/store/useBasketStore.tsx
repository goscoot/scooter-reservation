import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IProduct {
  id: number;
  count: number;
}

interface IStore {
  basketProducts: IProduct[];
  handleProducts: (productId: number, count: number) => void;
  removeProducts: (productId: number) => void;
  addProduct: (productId: number) => void;
}

// Load the state from localStorage if it exists
const initialState = localStorage.getItem("scooterStore")
  ? JSON.parse(localStorage.getItem("scooterStore") as string)
  : [];

export const useBasketStore = create(
  immer<IStore>((set) => ({
    basketProducts: initialState,
    handleProducts: (productId: number, count: number) =>
      set((state) => {
        const index = state.basketProducts.findIndex(
          (product) => product.id === productId
        );
        if (index !== -1) state.basketProducts[index].count = count;
      }),
    removeProducts: (productId: number) =>
      set((state) => ({
        basketProducts: state.basketProducts.filter(
          (product) => product.id !== productId
        ),
      })),
    addProduct: (productId: number) =>
      set((state) => {
        const index = state.basketProducts.findIndex(
          (product) => product.id === productId
        );
        if (index === -1) {
          // If product is not in basket, add it with count 1
          state.basketProducts.push({ id: productId, count: 1 });
        } else {
          // If product is already in basket, increment its count
          state.basketProducts[index].count += 1;
        }
      }),
  }))
);

// Persist the state to localStorage on each change
useBasketStore.subscribe((state) => {
  localStorage.setItem("scooterStore", JSON.stringify(state.basketProducts));
});

export default useBasketStore;
