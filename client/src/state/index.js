import { createSlice } from "@reduxjs/toolkit";
const initialState={
    mode:"dark",
    userId:"63701cc1f032390a34000322"
};

export const globalSlice=createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode=state.mode==='light'?'dark':'light';

        }
    }
});
console.log(globalSlice.actions);
export const{setMode}=globalSlice.actions;
export default globalSlice.reducer;