import { createSlice } from "@reduxjs/toolkit";
const initialState={
    eusers:[]
}

export const  userSlice= createSlice({
    name:'mySlice',
    initialState,
    reducers:{setUsers:(state,action)=>{   // it conatain 2 argu , first one action and second one is payload
        state.eusers=[...state.eusers,action.payload]
    }
}
})
export const {setUsers,deleteuser}=userSlice.actions
export default userSlice.reducer