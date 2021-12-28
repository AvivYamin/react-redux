import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const weatherStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
weatherStore.subscribe(() => console.log(`Initial State : ${weatherStore.getState()}`))
export default weatherStore