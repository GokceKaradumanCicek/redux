import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; //to access to 'store' we created.
import {counterActions} from '../store/index'; 
const Counter = () => {
  const dispatch=useDispatch(); //useDispatch returns a function
  const counter = useSelector(state=>state.counter)//this function will be executed for us by react redux,
  //then it will pass redux state,
  //get the part of state which this component is needed.This is 'counter' in this store.
  //Now the great thing is that when you use useSelector,
  //React Redux will automatically set up a subscription to the Redux store for this component.
  //So your component will be updated and will receive the latest counter automatically
  //whenever that data changes in the Redux store.
  //So it's an automatically reactive and changes to the Redux store will cause this function to be executed.
  const showCounter= useSelector(state=>state.showCounter);

  const incrementHandler=()=>{
    //dispatch({type: 'increment', amount:1});
    dispatch(counterActions.increment(1));// {tpe:SOME_UNIDUE_IDENTIFIER, payload:..} automatically created.
  }
  const decrementHandler=()=>{
    //dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  }
  const increment5Handler=()=>{
    //dispatch({type: 'increment', amount:5});
    dispatch(counterActions.increment(5));
  }
  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'})
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button  onClick={decrementHandler}>Decrement</button>
        <button  onClick={increment5Handler}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
