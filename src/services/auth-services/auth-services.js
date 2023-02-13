import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from '../../api/api';

export const registerUser = createAsyncThunk( 
    'auth/register',
    async (body, thunkAPI) => {                       // body: { name, email, password }
        try {
            const response = await axios.post('/users/signup', body);
            console.log('token >>>>', response.data.token);
            return response.data;
        } catch (error) {
            
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
    
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (body, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', body);
            setAuthHeader(response.data.token);
            console.log('LOGIN >>>>', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            }
});


// export const getProfile = async () => {
//     const { data } = await axiosInstance('/users/current')
//     return data
// }