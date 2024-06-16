import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import combinedFeatureReducers from '@/store/nodes/features';

const rootReducer = combineReducers({
  features: combinedFeatureReducers,
});

const storeConfig = {
  reducer: rootReducer,
};

export const store = configureStore(storeConfig);

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useAppStore = useStore;
