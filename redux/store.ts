import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducerMain from './reducers/main';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({ reducerMain });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;