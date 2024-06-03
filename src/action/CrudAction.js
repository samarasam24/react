export const CREATE_USER_NAME = 'CREATE_USER_NAME';
export const CREATE_USER_PASSWORD = 'CREATE_USER_PASSWORD';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const fetchDataRequest = () => ({
    type: FETCH_USER_REQUEST,
  });
  
  // Action creator for FETCH_DATA_SUCCESS
  export const fetchDataSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    payload: data,
  });