import { combineReducers } from "redux";
import { authReducer } from "./auth/sliceAuth";
import { reducerFilter } from './contacts/sliceFilter';
import { reducerContacts } from './contacts/slice';

export const rootReducer = combineReducers({
    contacts: reducerContacts,
    filter: reducerFilter,
    auth: authReducer,
})