import { createStore } from "redux";
import { rootReducer }from './reducers'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));