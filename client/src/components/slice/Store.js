// store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

import ProductSlice from './UserSlice'
import cartReducer from './CartSlice'
import userSlice from './user.slice'

const rootReducer = combineReducers({
    product: ProductSlice,
    cart: cartReducer,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage: sessionStorage, // stores in sessionStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export const persistor = persistStore(store)
