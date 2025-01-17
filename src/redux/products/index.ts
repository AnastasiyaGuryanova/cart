import { productsApiSlice } from "./api";
import { productsSlice } from "./slice";

const productsReducer = productsApiSlice.reducer;

export default productsReducer;

export const { useGetProductsQuery } = productsApiSlice;

export const productsMiddleware = productsApiSlice.middleware;
export const productsReducerPath = productsApiSlice.reducerPath;

export const productsSliceReducer = productsSlice.reducer;

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;
