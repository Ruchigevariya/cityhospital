import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer/rootReducer'

import { rootSaga } from './Saga/root.saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
