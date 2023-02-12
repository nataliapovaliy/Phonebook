import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;  //add JWT
} 

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';  // remove JWT
}

export const registerUser = createAsyncThunk( 
    'auth/register',
    async (body, thunkAPI) => {                       // body: { name, email, password }
        try {
            const response = await axios.post('/users/signup', body);
            setAuthHeader(response.data.token);
            console.log('token >>>>', response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
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


// export const getProfile = async () => {
//     const { data } = await axiosInstance('/users/current')
//     return data
// }