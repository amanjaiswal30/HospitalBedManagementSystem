import axios from 'axios'
export function getDataApi(object) {
    return  axios.get('http://localhost:9090/api/patient');
  }