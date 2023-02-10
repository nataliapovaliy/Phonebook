import { fetchContacts, addContact, delContact } from "./operationsContacts";

const { createSlice } = require("@reduxjs/toolkit");
const { initialStateContacts } = require("./initialStateContacts");

const slice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.error = payload;
            })

            .addCase(addContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.error = payload;
            })

            .addCase(delContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(delContact.fulfilled, (state, { payload }) => {
                state.items = state.items.filter((contact => contact.id !== payload.id))
                state.isLoading = false;
                state.error = null;
            })
            .addCase(delContact.rejected, (state, { payload }) => {
                state.error = payload;
            })
    }
})

export const reducerContacts = slice.reducer;