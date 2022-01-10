import { createStore } from "redux";
import {createSlice, configureStore} from '@reduxjs/toolkit';
import { configure } from "@testing-library/react";
const initialState={ counter:0, showCounter:true }

const counterSlice=createSlice({ //This is used to mutate the state, and prevent writing whole state even if some properties are not used.
    name:'counterSlice', // name of slice(required)
    initialState: initialState, // initial state must be entered
    reducers:{
        increment(state,action){ // increment method
          state.counter = state.counter+ action.amount; //just mutate counter according to amount
        },
        decrement(state){//decrement method
            state.counter--; //mutate counter property of state with decreasing by 1
        },
        toggle(){ // toggle method
            state.showCounter= !state.showCounter; //mutate showCounter property of state, changing with opposite value    
        }
    }
})


// const counterReducer=(state=initialState,action)=>{
//     if(action.type==='increment'){
//         return{// returns overall state object so showCounter must be added,even if it is not used here.
//             counter:state.counter+ action.amount,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             counter:state.counter,
//             showCounter: !state.showCounter //Must be the opposite of inital state 
//         }
//     }
//     return state;
// }
//const store=createStore(counterReducer);
const store=configureStore({
    reducer:counterSlice.reducer
})//Creates a store,receive an object not a function.

export default store;