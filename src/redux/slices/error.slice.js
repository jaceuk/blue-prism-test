import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        value: ''
    },
    reducers: {
        updateError: (state, action) => {
            state.value = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { updateError } = errorSlice.actions;

export default errorSlice.reducer;
