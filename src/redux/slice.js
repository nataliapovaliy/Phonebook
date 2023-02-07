import { fetchContacts, delContact } from "./operationsContacts";

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
                state.items = [...payload];
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.error = payload;
            })
            .addCase(delContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(delContact.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.filter((contact => contact.id !== state.payload))
            })
        
    }

    // reducers: {
    //     createContacts(state, action) {
    //             state.contacts = [action.payload, ...state.contacts]
    //     },
    //     delContact(state, action) {
    //         state.contacts = state.contacts.filter((contact => contact.id !== action.payload))
    //     },
    //     filterSlice(state, action) {
    //         state.filter = action.payload
    //     },
    // }
})

// export const { createContacts, delContact, filterSlice } = slice.actions

export default slice.reducer