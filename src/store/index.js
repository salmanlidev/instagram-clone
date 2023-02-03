import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/auth/authSlice";
import userSliceReducer from "./features/user/userSlice";
import settingsModalReducer from "./features/modal/settingsModalSlice";


export const store = configureStore({
    reducer : {
        auth : authSliceReducer ,
        user : userSliceReducer , 
        setModal : settingsModalReducer
    }
})