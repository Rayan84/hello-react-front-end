import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import greetings from './greetings/greetings';

const reducer = combineReducers({
  greetings: greetingsReducer
});

const store = createStore(reducer, applyMiddleware(logger, reduxThunk));

export default store;
