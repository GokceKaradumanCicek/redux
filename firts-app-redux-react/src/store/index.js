import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

const store=configureStore({
    reducer:{
        counterReducer:counterSlice.reducer,
        authReducer:authSlice.reducer
    }
})//Creates a store,receive an object not a function.

export const authActions=authSlice.actions;
export const counterActions=counterSlice.actions;
export default store;