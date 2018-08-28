import axios from 'axios';

export const FETCH_SCHEDULES = 'fetch_schedules';
export const CREATE_SCHEDULE = 'create_schedule';
export const FETCH_SCHEDULE = 'fetch_schedule';
export const DELETE_SCHEDULE = 'delete_schedule';

// function CSRFToken() {
//   return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
// }

// rails api
const Root = 'https://calendar-practice.herokuapp.com';
const APIEndpoints = {
  SCHEDULE: Root + '/schedule',
};

// get array of all schedules
export function fetchSchedules() {
  const request = axios.get(`${APIEndpoints.SCHEDULE}`);

  return {
    type: FETCH_SCHEDULES,
    payload: request
  };
}

export function createSchedule(values, callback) {
  const request = axios.post(`${APIEndpoints.SCHEDULE}`, values)
    .then(() => callback());
  return {
    type: CREATE_SCHEDULE,
    payload: request
  };
}

// get single schedule
// export function fetchSchedule(id) {
//   const request = axios.get(`${APIEndpoints.SCHEDULE}/${id}`);
//   return {
//     type: FETCH_SCHEDULE,
//     payload: request
//   };
// }

export function deleteSchedule(id, callback) {
  console.log(id);
  debugger
  const request = axios.delete(`${APIEndpoints.SCHEDULE}/${id}`)
      .then(() => callback());

  return {
    type: DELETE_SCHEDULE,
    payload: id
  };
}
