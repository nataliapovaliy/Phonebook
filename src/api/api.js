import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;  //add JWT
} 

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';  // remove JWT
}