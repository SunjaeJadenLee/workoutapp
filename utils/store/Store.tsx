import {} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import MainReducer from '../reducers/MainReducer';

const Store = createStore(combineReducers({main:MainReducer}));

export default Store