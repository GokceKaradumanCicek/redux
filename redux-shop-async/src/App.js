import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import {Fragment, useEffect} from 'react';
import {uiAction} from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial=true;

function App() {
  const dispatch=useDispatch(); 
  const showCart= useSelector((state)=>state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const notificationState=useSelector((state)=>state.ui.notification)

 useEffect(()=>{
   const sendCartData=async()=>{
     dispatch(uiAction.showNotification({status:'pending',title:'Sending..',message: 'Sending cart data!'}));
     const response=await fetch('https://test-eaa5f-default-rtdb.firebaseio.com//cart.json', 
     { method:'PUT',
       body:JSON.stringify(cart),
     });//PUT request will override existing cart
     if(!response.ok){
       throw new Error('Sending cart data failed.');
     }
     //const responseData=await response.json(); //since put request, not interested in response data.
     dispatch(uiAction.showNotification({status:'success',title:'Success!',message: 'Sent cart data successfully!'}));
   }
   if(isInitial){
     isInitial=false;
     return;
   }
   sendCartData().catch(error=>{dispatch(uiAction.showNotification({status:'error',title:'Error!',message: 'Sending cart data is failed!'}));})


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
