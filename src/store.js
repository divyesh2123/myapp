import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userREducer from './userSlice';

 const store =configureStore({
    reducer : {
        counter : counterReducer,
        user : userREducer
    }
})

export default store;