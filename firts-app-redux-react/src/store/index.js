import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState={ counter:0, showCounter:true }
const initialAuthState={ isAuthenticated:false }


const counterSlice=createSlice({ //This is used to mutate the state, and prevent writing whole state even if some properties are not used.
    name:'counterSlice', // name of slice(required)
    initialState: initialCounterState, // initial state must be entered
    reducers:{
        increment(state,action){ // increment method
          state.counter = state.counter+ action.payload; //just mutate counter according to amount
        },
        decrement(state){//decrement method
            state.counter--; //mutate counter property of state with decreasing by 1
        },
        toggle(state){ // toggle method
            state.showCounter= !state.showCounter; //mutate showCounter property of state, changing with opposite value    
        }
    }
})


const authSlice=createSlice({
    name:'Authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})
const store=configureStore({
    reducer:{
        counterReducer:counterSlice.reducer,
        authReducer:authSlice.reducer
    }
})//Creates a store,receive an object not a function.

export const authActions=authSlice.actions;
export const counterActions=counterSlice.actions;
export default store;