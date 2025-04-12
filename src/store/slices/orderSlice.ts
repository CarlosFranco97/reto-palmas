import { createSlice } from "@reduxjs/toolkit"

interface OrderItem {
    id: string, 
    name: string, 
    description: string, 
    category: string, 
    price: number, 
    quantity: number
}

interface Order {
    id: string, 
    createdAt: string
    total: number, 
    items: OrderItem[]
}


interface OrderState {
    orders: Order[], 
    loading: boolean, 
    error: string | null
}

const initialState: OrderState = {
    orders: [], 
    loading: false, 
    error: null
}

const orderSlice = createSlice({
    name: 'order', 
    initialState, 
    reducers: {

    }
}); 

export default orderSlice.reducer;