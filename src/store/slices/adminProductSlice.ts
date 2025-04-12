import { createSlice } from "@reduxjs/toolkit"

interface Product {
    id: string, 
    name: string, 
    category: "ropa" | "autos", 
    price: number, 
    image: string
}

interface AdminProductState {
    products: Product[]
}

const initialState: AdminProductState = {
    products: []
}

const adminProductSlice = createSlice({
    name: 'adminProduct', 
    initialState, 
    reducers: {

    }
}); 


export default adminProductSlice.reducer;