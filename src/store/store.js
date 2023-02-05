import { configureStore } from '@reduxjs/toolkit';
import { reducerContacts } from './reducerContacts';

export const store = configureStore({
    reducer: reducerContacts
})
