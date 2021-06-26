import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './slices/error.slice';
import scheduleReducer from './slices/schedule.slice';

export default configureStore({
    reducer: {
        error: errorReducer,
        schedule: scheduleReducer
    }
});
