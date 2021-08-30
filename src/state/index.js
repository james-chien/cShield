import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { createLogger } from 'redux-logger'

// Reducers
import network from './network/slice'
import user from './user/slice'
import { auditsApi } from './audits/slice'

// Epics
import { checkNetworkEpic } from './network/epic'

const epics = [
  checkNetworkEpic,
];

const rootEpic = combineEpics(...epics)

// Middlewares
const epicMiddleware = createEpicMiddleware()
const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.

const PERSISTED_KEYS = ['user']

const store = configureStore({
  reducer: {
    network,
    user,
    [auditsApi.reducerPath]: auditsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(epicMiddleware)
      .concat(logger)
      .concat(auditsApi.middleware)
      .concat(save({ states: PERSISTED_KEYS, namespace: 'cshield', debounce: 1000 })),
  devTools: true,
  preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: process.env.NODE_ENV === 'test' }),
})

export default store

// Run the middleware with the provided epic.
epicMiddleware.run(rootEpic)
