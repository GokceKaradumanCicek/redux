const redux= require('redux');// importing third party pacakages
const counterReducer=(state={ counter:0 },action)=>{
    return {
        counter: state.counter +1
    };
}
const store=redux.createStore(counterReducer) //redux is an object, creating store and receive reducer function
console.log(store.getState());

const counterSubscriber=()=>{ //subscriber function, no parameters
    const latestState=store.getState();// getState is avaliable method on created 'store',it gives latest state snapshot
    console.log(latestState) 
}
 
store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});
//action int he dispatch function is just a java script object with a type property which act as an identifier
