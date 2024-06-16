import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/slice';

const combinedFeatureReducers = combineReducers({
  counter: counterReducer,
});

export default combinedFeatureReducers;
