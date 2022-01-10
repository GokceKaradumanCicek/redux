import { createStore } from "redux";
const initialState={ counter:0, showCounter:true }
const counterReducer=(state=initialState,action)=>{
    if(action.type==='increment'){
        return{// returns overall state object so showCounter must be added,even if it is not used here.
            counter:state.counter+ action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return{
            counter:state.counter,
            showCounter: !state.showCounter //Must be the opposite of inital state 
        }
    }
    return state;
}
const store=createStore(counterReducer);
export default store;