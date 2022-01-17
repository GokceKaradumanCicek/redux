import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {Fragment, useEffect} from 'react';
import Notification from './components/UI/Notification';
import {fetchCartData, sendCartData} from './store/cart-actions';

let isInitial=true;

function App() {
  const dispatch=useDispatch(); 
  const showCart= useSelector((state)=>state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const notificationState=useSelector((state)=>state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData(cart));
  },[dispatch]);
  //This useEffect just work for the first time that component renders.
  //since dispatch function is never changed.

 useEffect(()=>{
   if(isInitial){
     isInitial=false;
     return;
   }
  dispatch(sendCartData(cart));
 }, [cart, dispatch]);

  return (
    <Fragment>
      {notificationState && <Notification status={notificationState.status} title={notificationState.title} message={notificationState.message}/>}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
