import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";
const chatSlice = createSlice({
    name : 'liveChat',
    initialState : {
        messages : [],
    }, // we want to store obj contaning name and message
    reducers:{
        addChat : (state,action)=>{
            console.log('reducer is called addChat')
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;

