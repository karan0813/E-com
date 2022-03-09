import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/counter/cartslice';
import userReducer from '../features/counter/userslice';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    user : userReducer
    
  },
});
