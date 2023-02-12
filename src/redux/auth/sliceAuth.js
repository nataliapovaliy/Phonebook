import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser } from '../../services/auth-services/auth-services';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleFullfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = '';
    state.token = payload.token;
    state.isLoggedIn = true;
    state.user = payload.user;
}

const handleError = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const handleFullfilledLogOut = (state) => {
    state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
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
    },
})

export const authReducer = authSlice.reducer