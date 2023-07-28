import { createSlice } from "@reduxjs/toolkit";
import { Meal } from "../../types/types";


interface StoreList {
    list: Meal[],
}

const initialState: StoreList = {
    list: []
}


const storeListSlicer = createSlice({
    name: 'listStore',
    initialState,
    reducers: {
        addRecipe: (state, actions) => {
            state.list.push(actions.payload)
        },
        deleteRecipe: (state, actions) => {
            state.list = state.list.filter(el => el.idMeal !== actions.payload.idMeal)
        }
    }
})


export const { addRecipe, deleteRecipe } = storeListSlicer.actions
export default storeListSlicer