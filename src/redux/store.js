import { configureStore } from "@reduxjs/toolkit"
import {
	persistStore,
	persistReducer,
	
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from './reducer'

const persisConfig = {
    key: 'main',
    storage,
}

const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

})

export const persistor = persistStore(store);