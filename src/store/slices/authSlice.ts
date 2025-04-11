import { createSlice } from "@reduxjs/toolkit"

interface User {
    id: string, 
    name: string, 
    email: string
}

interface AuthState {
    user: User | null, 
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null, 
    isAuthenticated: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {

    }
}); 

export default AuthSlice; 