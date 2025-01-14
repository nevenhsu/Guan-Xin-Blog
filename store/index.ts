import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import generalReducer from './slices/general'
import { logger } from './logger'
import storage from './customStorage'

const generalPersistConfig = {
  key: 'general',
  storage,
  version: 1.0,
}

const rootReducer = combineReducers({
  general: persistReducer(generalPersistConfig, generalReducer),
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
