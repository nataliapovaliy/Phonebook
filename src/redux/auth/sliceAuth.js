import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser, refreshUser } from './auth-services';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    errorAuth: null,
}

const handlePending = (state) => {
    state.isLoading = true;
    // state.error = '';
    state.errorAuth = null;
}

const handleFullfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = '';
    state.token = payload.token;
    state.isLoggedIn = true;
    // state.user = payload.user;
    state.errorAuth = null;
}

const handleError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.errorAuth = payload;
}

const handleFullfilledLogOut = (state) => {
    state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
}

const handleFullfilledRefresh = (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handlePendingRefresh = (state) => {
    state.isRefreshing = true;
}

const handleRejectedRefresh = (state) => {
    state.isRefreshing = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, handlePending)
            .addCase(registerUser.fulfilled, handleFullfilled)
            .addCase(registerUser.rejected, handleError)
        
            .addCase(loginUser.pending, handlePending)
            .addCase(loginUser.fulfilled, handleFullfilled)
            .addCase(loginUser.rejected, handleError)
        
            .addCase(logOutUser.fulfilled, handleFullfilledLogOut)

            .addCase(refreshUser.pending, handlePendingRefresh)
            .addCase(refreshUser.fulfilled, handleFullfilledRefresh)
            .addCase(refreshUser.rejected, handleRejectedRefresh)
    },
})

export const authReducer = authSlice.reducer