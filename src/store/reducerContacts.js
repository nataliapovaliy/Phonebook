import { createReducer } from "@reduxjs/toolkit";
import { creatContactAction, deleteContact } from "./actionsContacts";
import { initialStateContacts } from "./initialStateContacts";


export const reducerContacts = createReducer(initialStateContacts.contacts, {
    [creatContactAction]: (state, action) => [action.payload, ...state],
    [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});