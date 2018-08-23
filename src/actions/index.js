import axios from 'axios';

export const FETCH_SCHEDULES = 'fetch_schedules';
export const CREATE_SCHEDULE = 'create_schedule';

// function CSRFToken() {
//   return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// }

// rails api
const Root = 'https://calendar-practice.herokuapp.com';
const APIEndpoints = {
  SCHEDULE: Root + '/schedule',
};

export function fetchSchedules() {
  const request = axios.get(`${APIEndpoints.SCHEDULE}`);

  return {
    type: FETCH_SCHEDULES,
    payload: request
  };
}
//
export function createSchedule(values, callback) {
  const request = axios.post(`${APIEndpoints.SCHEDULE}`, values)
    .then(() => callback());
  return {
    type: CREATE_SCHEDULE,
    payload: request
  };
}
