// fooReducer.tsx

import { createSlice } from '@reduxjs/toolkit';

const initialValue = { name: "Nigel", age: 63 }
export const fooSlice = createSlice({
    name: 'foo',
    initialState: {value: initialValue},
    reducers: {
        changeAll: (state, action) => {
            console.log(action.payload)
            console.log(state.value)
            state.value = action.payload;
        },
        agePlusOne: (state, action) => {
            state.value.age += 1
        }
    }
})

export const { changeAll, agePlusOne } = fooSlice.actions;
export default fooSlice.reducer;