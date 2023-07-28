import { configureStore } from "@reduxjs/toolkit";
import { recipeSlicer } from "./features/recipeSlicer";
import modals from "./features/modalsOwn";
import storeListSlicer from "./features/storeListSlicer";
import onwSlicer from "./features/ownSlicer";





const store = configureStore({
    reducer: {
        netRecipes: recipeSlicer.reducer,
        modals: modals.reducer,
        listStore: storeListSlicer.reducer,
        ownStore: onwSlicer.reducer,
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;