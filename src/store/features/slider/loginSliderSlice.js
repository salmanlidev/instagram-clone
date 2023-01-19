import { createSlice } from "@reduxjs/toolkit";
import { images } from "../../../assets/images";

const initialState = {
    content: [images.sc1, images.sc2, images.sc3, images.sc4],
    currentIndex: 0,
}

export const loginSliderSlice = createSlice({
    name: "loginSlider",
    initialState,
    reducers: {
        increaseCurrent: (state) => {
            if (state.currentIndex >= state.content.length - 1 ) {
                state.currentIndex = 0
            }
            else {
                state.currentIndex++
            }
        }
    }
})


export const { increaseCurrent } = loginSliderSlice.actions
export default loginSliderSlice.reducer