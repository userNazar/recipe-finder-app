import { createSlice } from "@reduxjs/toolkit";
import { OnwRoot } from "../../types/types";



const initialState: OnwRoot = {
    mealsOwn: [],
}


const onwSlicer = createSlice({
    name: 'own',
    initialState,
    reducers: {
        addOwnRecipe: (state, actions) => {
            state.mealsOwn.push(actions.payload)
        }
    }
})


export const { addOwnRecipe } = onwSlicer.actions;

export default onwSlicer;