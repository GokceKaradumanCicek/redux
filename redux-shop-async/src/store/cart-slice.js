import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,//How many diffrent items?
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.items=action.payload.items;
        },
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
export const cartActions=cartSlice.actions;
export default cartSlice;

