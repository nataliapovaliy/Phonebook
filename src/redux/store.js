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
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "./reducer"

const persisConfig = {
    key: 'main',
    storage,
    blacklist: ['filter'],
}

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
	reducer: rootReducer,
		persistedReducer,
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
})

export const persistor = persistStore(store);