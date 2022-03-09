import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userdata:[],
}

const userslice = createSlice({
    name: "user",
    initialState,
    reducers: {
        Adduser: (state,action) => {
            state.userdata.push(action.payload)
      },
      deletuser: (state,action) => {
        state.userdata.push(action.payload)
      },
     
  
      

    }
});

export const { Adduser, deletuser  } = userslice.actions
export const selectuser = (state) => state.user.userdata;

export default userslice.reducer