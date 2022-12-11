import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    toast: null,
    isSignupCase: null,
    globalCounter: 0
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true
        },
        addToCounter: (state, action) => {
            state.globalCounter += action.payload
        },
        resetGlobalCounterTo: (state, action) => {
            state.globalCounter = action.payload
        },
        hideLoader: (state, action) => {
            state.isLoading = false
        },
        setSuccessToast: (state, action) => {
            state.toast = { type: 'success', message: action.payload }
        },
        setDangerToast: (state, action) => {
            state.toast = { type: 'danger', message: action.payload }
        },
        hideToast: (state) => {
            state.toast = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { showLoader, hideLoader, setSuccessToast, setDangerToast, hideToast, addToCounter, resetGlobalCounterTo } = appSlice.actions

export default appSlice.reducer