import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as layoutReducer } from './layout/Redux';



const appReducer = combineReducers({
    layout: layoutReducer
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export const store = configureStore({
    reducer: rootReducer
});


