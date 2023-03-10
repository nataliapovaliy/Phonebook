import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from '../../api/api';


// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;  //add JWT
// } 
// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';  // remove JWT
// }

export const registerUser = createAsyncThunk( 
    'auth/register',
    async (body, thunkAPI) => {                       // body: { name, email, password }
        try {
            const response = await axios.post('/users/signup', body);
            setAuthHeader(response.data.token);
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
            console.log('response.data LOGIN >>>>', response.data);
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

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

    if (persistedToken === null) {

    return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

