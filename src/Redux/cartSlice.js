import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cartSlice",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCartList:(state,action)=>{
           return state.filter((item)=>item.id!==action.payload)
        }
    }
})
export const {addToCart,removeFromCartList} = cartSlice.actions
export default cartSlice.reducer