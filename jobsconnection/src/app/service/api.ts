import axios from 'axios'; 

const api = axios.create({
  baseURL: 'https://connections-jobs-api-production.up.railway.app/api/'
}); 

export { api };