import { configureStore } from "@reduxjs/toolkit"


const persistedReducer = persistReducer(persisConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,

})

export const persistor = persistStore(store);