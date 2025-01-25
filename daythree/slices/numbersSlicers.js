
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numbers: []
};

export const numbersSlice = createSlice({
    name: 'numbers',
    initialState,      // if state name is vary then you give like this initialState:state
    reducers: {
        addNumbers: (state, action) => {
            state.numbers = [...state.numbers, action.payload];
        }
    }
});

export const { addNumbers } = numbersSlice.actions;

export default numbersSlice.reducer;
