import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state,action)=> {
            // console.log(action.payload)
            const alreadyThere = state.items.find(item => item.imageId == action.payload.imageId);
            if(alreadyThere){
               alreadyThere.count+=1;
            }
            else state.items.push(action.payload);
        },
        removeItems: (state,action) => {
           state.items.pop();
        },
        clearCart : (state,action) => {
           state.items.length = 0;
        }
    }
})


export const {addItems,removeItems,clearCart} = cartSlice.actions  //export the actions

export default cartSlice.reducer;   // export the reducers