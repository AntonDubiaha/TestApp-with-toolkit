import axios from "axios"

const SubCategoryApi = axios.create({
    baseURL: "http://localhost:8000"
})

export const getCategories = async () => {
    const response = await SubCategoryApi.get("/api/sub_categories/")
    return response.data
}

export const addCategory = async (ThirdCategory) => {
    return await SubCategoryApi.post("/api/sub_categories/", ThirdCategory)
}

export const updateCategory = async (ThirdCategory) => {
    return await SubCategoryApi.put(`/api/sub_categories/${ThirdCategory.id}`, ThirdCategory)
}

export const deleteCategory = async ({ id }) => {
    return await SubCategoryApi.delete(`/api/sub_categories/${id}`, id)
}

export default SubCategoryApi 