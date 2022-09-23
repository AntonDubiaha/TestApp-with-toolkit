import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categoriesSlice";

export const store = configureStore({
    reducer: {
        ThirdCategory: categorySlice
    },
})
