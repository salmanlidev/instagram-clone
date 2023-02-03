import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

export const settingsModalSlice = createSlice({
    name : "settingsModal" ,
    initialState , 
    reducers : {
        showModal : (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { showModal } = settingsModalSlice.actions
export default settingsModalSlice.reducer
