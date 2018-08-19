import axios from 'axios';

const CREATE_SCHE = 'create_sche';

function CSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}

// rails api
const Root = window.location.origin;
const APIRoot = `${Root}/api`;
const APIEndpoints = {
  SCHEDULES: APIRoot + '/schedules',
};

//
export function createSche(values, callback) {
  const request = axios.post(`${APIEndpoints}`, values); // rails api に合わせる

  return {
    type: CREATE_SCHE,
    payload: request
  };
}
