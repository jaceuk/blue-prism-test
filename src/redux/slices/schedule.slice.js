import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        id: '',
        name: '',
        isRetired: ''
    },
    reducers: {
        updateSchedule: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.isRetired = action.payload.isRetired;
        }
    }
});

// Action creators are generated for each case reducer function
export const { updateSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
