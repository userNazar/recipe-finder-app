import { createSlice } from "@reduxjs/toolkit";
import { modalsOwn } from "../../types/types";


const initialState: modalsOwn = {
    cardModal: false,
    cardModalData: null,
}

export const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openCardModal: (state, actions) => {
            state.cardModal = true;
            state.cardModalData = actions.payload;
        },
        closeCardModal: state => {
            state.cardModal = false;
        }
    }
})


export const {openCardModal, closeCardModal} = modals.actions
export default modals;