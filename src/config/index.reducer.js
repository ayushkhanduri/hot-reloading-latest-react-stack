import {combineReducers} from 'redux';

import {CardReducer as Card} from '../reducers/card.reducer';
import {CounterReducer as Counter } from '../reducers/counter.reducer';
export default combineReducers({Card,Counter});