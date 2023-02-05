//! https://api.unsplash.com/photos/?client_id=Nm5dzot4fLSzDcGxbJ-QJrEwo0WpynnbLGDNOKXu-qk

import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    photos: [],
    loading: false,
    error: null
}

export const getImages = createAsyncThunk('getImages', async () => {
    const { data } = await axios.get("https://api.unsplash.com/photos/?client_id=Nm5dzot4fLSzDcGxbJ-QJrEwo0WpynnbLGDNOKXu-qk")
    return data
})

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImages.pending , (state) => {
            state.loading = true
        })
        builder.addCase(getImages.fulfilled , (state , action) => {
            state.loading = false 
            state.photos = action.payload            
        })
        builder.addCase(getImages.rejected , (state , action) => {
            state.error = action.payload
            state.photos = []
        })
    }
})

export default photosSlice.reducer