import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishList",
    initialState:{
        wishList:[]
    },
    reducers:{
        addToWishList:(state,action)=>{
            state.wishList.push(action.payload)
        }
    }
})
export const {addToWishList} = wishListSlice.actions
export default wishListSlice.reducer