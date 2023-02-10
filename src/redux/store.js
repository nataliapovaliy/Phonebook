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
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import  reducer  from '../redux/slice'
import {reducerContacts} from './contacts/slice';
import { reducerFilter } from '../redux/contacts/sliceFilter';

// const persisConfig = {
//     key: 'main',
//     storage,
//     blacklist: ['filter'],
// }

// const persistedReducer = persistReducer(persisConfig, reducer)

export const store = configureStore({
	reducer:
		// persistedReducer,
	{
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

// export const persistor = persistStore(store);