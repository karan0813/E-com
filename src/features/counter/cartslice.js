import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  
  status: 'idle',
};



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    SetCart: (state , action) => {
      
      state.value.push(action.payload)
    },
      
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
 
  
});

export const { SetCart , setcartcount } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
