import {createSlice} from '@reduxjs/toolkit';
const initialCounterState={ counter:0, showCounter:true }
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
export default counterSlice;