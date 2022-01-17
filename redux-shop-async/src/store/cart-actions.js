import { uiAction } from './ui-slice';
import { cartActions } from './cart-slice';

export  const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData= async ()=>{
            const response= await fetch('https://test-eaa5f-default-rtdb.firebaseio.com//cart.json')
            //Since get request is the default method so we don't nee to any extra payload
            if(!response.ok){
                throw new Error('Fetching data is failed.');
            }
            const data= await response.json();
            return data;
        }
        try{
            const cartData=await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }catch(error){
            dispatch(uiAction.showNotification({status:'error',title:'Error!',message: 'Sending cart data is failed!'}));
        }
    }
}


export const sendCartData=(cart)=>{//action creater function

    return async (dispatch)=>{
        dispatch(uiAction.showNotification({status:'pending',title:'Sending..',message: 'Sending cart data!'}));
        
        const sendingRequest = async () =>{
          const response= await fetch('https://test-eaa5f-default-rtdb.firebaseio.com//cart.json', 
         { method:'PUT',
          body:JSON.stringify(cart),
         });//PUT request will override existing cart
         if(!response.ok){
          throw new Error('Sending cart data failed.');
         }
        }

      try{
        await sendingRequest();
        dispatch(uiAction.showNotification({status:'success',title:'Success!',message: 'Sent cart data successfully!'}));
      }catch(error){
        dispatch(uiAction.showNotification({status:'error',title:'Error!',message: 'Sending cart data is failed!'}));
      }
    }

}