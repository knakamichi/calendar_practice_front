import _ from 'lodash';
import {FETCH_ALL_SCHE} from '../actions';

export default function (state = {}, action ) {
  switch (action.type) {
    case FETCH_ALL_SCHE:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
