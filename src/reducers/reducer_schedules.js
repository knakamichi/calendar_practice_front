import _ from 'lodash';
import {FETCH_SCHEDULES, FETCH_SCHEDULE, DELETE_SCHEDULE} from '../actions';

export default function (state = {}, action ) {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_SCHEDULE:
      const schedule = action.payload.data;
      const newState = {...state, };
      newState[schedule.id] = schedule;
      return newState;

    // same code for above four lines
    // return { ... state, [action.payload.data.id] : action.payload.data};
    case DELETE_SCHEDULE:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}
