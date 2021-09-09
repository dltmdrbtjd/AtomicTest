import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// reducer
import auth from './modules/auth'
import order from './modules/order'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  auth,
  order,
  router: connectRouter(history),
})

// dev 모드에서만 logger 사용
const middleware = [thunk]
if (process.env.NODE_ENV === 'development') middleware.push(logger)

// store 생성
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
