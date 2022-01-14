import { createSlice } from '@reduxjs/toolkit';
import { uiAction } from './ui-slice';
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,//How many diffrent items?
    },
    reducers:{
        addItemtoCart(state,action){ //action for which item should be added
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id, 
                    price:newItem.price, 
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });//in redux we could not use push because it manipulates existing array,but redux toolkit we can do.
            }else{
                existingItem.quantity=existingItem.quantity+1;
                existingItem.totalPrice=existingItem.totalPrice +newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const removingItem=action.payload;
            const existingItem=state.items.find(item=>item.id===removingItem.id);
            state.totalQuantity--;
            if(existingItem.quantity===1){ //quantity 1 ve silnmek isteniyorsa,existingItem array den tamamen silinmelidir.
                state.items= state.items.filter(item=> item.id !== removingItem.id);//removingItem olmayanları filtreler yani removingItem silmiş olur.

            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice -removingItem.price;

            }
        }

    }
});
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
export const cartActions=cartSlice.actions;
export default cartSlice;

