import { configureStore } from "@reduxjs/toolkit";
import shoppingCardSlice from './slices/shoppingCartSlice';
import authSlice from './slices/authSlice';
import adminProductSlice from './slices/adminProductSlice';
import orderSlice from './slices/orderSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCardSlice, 
        auth: authSlice, 
        adminProduct: adminProductSlice, 
        order: orderSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 