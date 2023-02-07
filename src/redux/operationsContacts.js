import { createAsyncThunk } from "@reduxjs/toolkit";

const { default: axios } = require("axios");


axios.defaults.baseURL = 'https://63e2787bad0093bf29d0c81b.mockapi.io/:';

export const fetchContacts = createAsyncThunk(
    'contact/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchDelContact = createAsyncThunk(
    'contact/delete',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }   
    }
)