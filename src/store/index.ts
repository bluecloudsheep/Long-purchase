import { configureStore } from '@reduxjs/toolkit'
import ThunkMiddleware from '.pnpm/redux-thunk@3.1.0_redux@5.0.1/node_modules/redux-thunk'
import combineReducers from '.pnpm/redux@5.0.1/node_modules/redux'

import counterReducer from './features/count'
const store = configureStore({
  reducer: {
    count: counterReducer
  }
})

export default store
