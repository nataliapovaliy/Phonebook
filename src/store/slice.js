const { createSlice, nanoid } = require("@reduxjs/toolkit");
const { deleteContact } = require("./actionsContacts");
const { initialStateContacts } = require("./initialStateContacts");


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    reducers: {
        createContactAction: {
            reducer(state, action) { state.contacts = [action.payload, ...state.contacts] },
            prepare(value) {
                return {
                payload: {...value, id:nanoid()}
            }}
        },
        deleteContact(state,action) { state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)},
    },
})

export const { createContactAction, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;