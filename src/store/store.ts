import { configureStore } from "@reduxjs/toolkit";
import ShoppingCardSlice from './slices/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: ShoppingCardSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 