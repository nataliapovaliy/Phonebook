const { createSlice } = require("@reduxjs/toolkit");
const { initialStateContacts } = require("./initialStateContacts");


const slice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    reducers: {
        createContacts: {
            reducer(state, action) {
                state.contacts = [action.payload, ...state.contacts]
            }
        },
        delContact(state, action) {
            state.contacts = state.contacts.filter((contact => contact.id !== action.payload))
        },
        filterSlice(state, action) {
            state.filter = action.payload
        },
    }
})

export const { createContacts, delContact, filterSlice } = slice.actions

export const contactsReducer = slice.reducer