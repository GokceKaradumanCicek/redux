import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {Fragment, useEffect} from 'react';
import Notification from './components/UI/Notification';
import {sendCartData} from './store/cart-slice';

let isInitial=true;

function App() {
  const dispatch=useDispatch(); 
  const showCart= useSelector((state)=>state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const notificationState=useSelector((state)=>state.ui.notification)

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
