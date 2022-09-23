import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    categories: [],
    error: ''
}

export const fetchCategories = createAsyncThunk('redux/fetchCategories', async () => {
    const response = await axios
        .get('http://127.0.0.1:8000/api/sub_categories/');
    return response.data;
})

const categorySlice = createSlice({
    name: 'ThirdCategory',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
            state.error = ''
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false
            state.categories = []
            state.error = action.error.message
        })
    }
})

export default categorySlice.reducer
