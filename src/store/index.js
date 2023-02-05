import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/auth/authSlice";
import userSliceReducer from "./features/user/userSlice";
import settingsModalReducer from "./features/modal/settingsModalSlice";
import photosReducer from "./features/photos/photosSlice";


export const store = configureStore({
    reducer : {
        auth : authSliceReducer ,
        user : userSliceReducer , 
        setModal : settingsModalReducer ,
        photos : photosReducer
    }
})