import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ThirdCategorySlice = createSlice({
  name: 'ThirdCategory',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name, sub_categories } = action.payload;
      const existingCategory = state.find(ThirdCategory => ThirdCategory.id === id);
      if(existingCategory) {
        existingCategory.name = name;
        existingCategory.sub_categories = sub_categories;
      }
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      const existingCategory = state.find(ThirdCategory => ThirdCategory.id === id);
      if(existingCategory) {
        return state.filter(ThirdCategory => ThirdCategory.id !== id);
      }
    }
  }
});

export const { addCategory, editCategory, deleteCategory } = ThirdCategorySlice.actions;
export default ThirdCategorySlice.reducer;