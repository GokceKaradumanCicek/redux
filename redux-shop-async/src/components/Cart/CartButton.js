import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const toggleHandler=()=>{
    dispatch(uiAction.toggle());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
