import { configureStore } from "@reduxjs/toolkit"
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import {reducerContacts} from '../redux/slice';
import { reducerFilter } from '../redux/sliceFilter';

export const store = configureStore({
	reducer: {
		contacts: reducerContacts,
		filter: reducerFilter,
	},
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
})
