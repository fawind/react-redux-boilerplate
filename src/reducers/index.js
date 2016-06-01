import { combineReducers } from 'redux';
import testReducer from './test';

const todoApp = combineReducers({ test: testReducer });

export default todoApp;
