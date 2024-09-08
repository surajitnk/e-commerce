import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem('user')
const name = JSON.parse(user)
const initialState = JSON.parse(localStorage.getItem(`${name.user.email}`)) ?? [];
const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        }
    }

})
 
export const { addToCart } = cartslice.actions;

export default cartslice.reducer;