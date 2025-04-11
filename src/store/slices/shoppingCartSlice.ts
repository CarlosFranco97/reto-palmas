import { createSlice } from "@reduxjs/toolkit"

interface Product {
    id: string, 
    name: string, 
    price: number, 
    quantity: number
}

interface ShoppingCartState {
    items: Product[]
}

const initialState: ShoppingCartState = {
    items: []
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart', 
    initialState,
    reducers: {
        
    }
}); 

export default shoppingCartSlice.reducer;
//exportar acciones... additem, deleteitem, etc. 
