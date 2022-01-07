const redux= require('redux');// importing third party pacakages for redux

const counterReducer=(state={ counter:0 },action)=>{ //reducer function that tahts state and action.State need to have initial value.
    if(action.type=== 'increment'){
        return {
            counter: state.counter +1
        };
    }
    if(action.type==='decreament'){
        return{
            counter:state.counter -1
        }
    }
}

const store=redux.createStore(counterReducer) //redux is an object, creating store and store receives reducer function

const counterSubscriber=()=>{ //subscriber function, no parameters
    const latestState=store.getState();// getState is avaliable method on created 'store',it gives latest state snapshot
    console.log(latestState) 
}
 
store.subscribe(counterSubscriber);//defining counterSubscriber to store as a subscriber function.
store.dispatch({type:'increment'});
//action in the dispatch function is just a java script object with a type property which act as an identifier
store.dispatch({type:'decreament'});