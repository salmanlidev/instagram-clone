import { configureStore } from "@reduxjs/toolkit";
import loginSliderReducer from "./features/slider/loginSliderSlice";


export const store = configureStore({
    reducer : {
        loginSlider : loginSliderReducer
    }
})