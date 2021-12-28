import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log(`Initial State:`, store.getState())
// store.subscribe(() => console.log('Updated State:', store.getState()))
export default store