import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../auth/initialState';
import { authThunk } from "./thunk";

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleFullfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = '';
    state.access_token = payload.access_token;
}

const handleError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.response.data.message;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(authThunk.pending, handlePending)
            .addCase(authThunk.fulfilled, handleFullfilled)
            .addCase(authThunk.rejected, handleError)
    },
})

export const authReducer = authSlice.reducer