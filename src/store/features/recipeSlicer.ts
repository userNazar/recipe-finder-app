import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Meal, Root } from "../../types/types";
import axios from "axios";



const initialState: Root = {
    meals: [],
    loading: false,
    error: null
}



export const fetchRecipe = createAsyncThunk<Meal[], string>(
    'recipe/fetchRecipe',
    async (letter = 'a') => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            return response.data.meals
        } catch (error) {
            throw new Error('Error')
        }
    }
)


export const recipeSlicer = createSlice({
    name: 'recipesAsync',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.meals = action.payload;
                state.loading = false;
            })
    }
})


