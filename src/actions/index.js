import axios from 'axios';

const CREATE_SCHEDULE = 'create_schedule';
const FETCH_SCHEDULES ='fetch_schedules';

// function CSRFToken() {
//   return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// }

// rails api
const Root = window.location.origin;
const APIRoot = `${Root}/api`;
const APIEndpoints = {
  SCHEDULES: APIRoot + '/schedules',
};

export function fetchSchedules() {
  const request = axios.get(`${APIEndpoints}`); // rails api に合わせる

  return {
    type: FETCH_SCHEDULES,
    payload: request
  };
}
//
export function createSchedule(values, callback) {
  const request = axios.post(`${APIEndpoints}`, values); // rails api に合わせる

  return {
    type: CREATE_SCHEDULE,
    payload: request
  };
}
