import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import SchedulesReducer from './reducer_schedules';

const rootReducer = combineReducers({
  schedules: SchedulesReducer,
  form: formReducer
});

export default rootReducer;
