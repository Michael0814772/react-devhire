import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import favoriteReducer from './favoriteReducer'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, favoriteReducer)
export let store = createStore(persistedReducer)
export let persistor = persistStore(store)