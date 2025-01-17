import { orderApiSlice } from "./api";

const orderReducer = orderApiSlice.reducer;

export default orderReducer;

export const { useCreateOrderMutation } = orderApiSlice;

export const orderMiddleware = orderApiSlice.middleware;

export const orderReducerPath = orderApiSlice.reducerPath;

export const { createOrder } = orderApiSlice.endpoints;
