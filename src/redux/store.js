import { configureStore } from "@reduxjs/toolkit"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

import storage from "redux-persist/lib/storage";
import { reducerContacts } from './contacts/slice';
import { reducerFilter } from './contacts/sliceFilter';
import { authReducer } from './auth/sliceAuth';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
    contacts: reducerContacts,
    filter: reducerFilter,
    auth: persistReducer(authPersistConfig, authReducer),
},
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
})

export const persistor = persistStore(store);