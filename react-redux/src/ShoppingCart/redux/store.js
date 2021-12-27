import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);
console.log(`Initial State:`, store.getState())
store.subscribe(() => console.log('Updated State:', store.getState()))
export default store