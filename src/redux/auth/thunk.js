import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "services/auth-services/auth-services";

export const authThunk = createAsyncThunk('auth/login', (payload) => {
    return loginUser(payload)
})
