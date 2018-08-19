import _ from 'lodash';
import {FETCH_SCHEDULES} from '../actions';

export default function (state = {}, action ) {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
