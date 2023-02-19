import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState : {

    },
    reducers:{
        cacheResults : (state,action)=>{
            // {ip : ["iphone","iphone11","iphone14"]}
            // console.log(action.payload,'**** action.payload')
             
            state =  Object.assign(state, action.payload);
        }
    }

})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;