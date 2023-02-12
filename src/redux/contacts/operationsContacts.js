import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            // console.log('data', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contacts, thunkAPI) => {
        try {
            const response = await axios.post(`/contacts`, contacts)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }   
    }
)

export const delContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }   
    }
)