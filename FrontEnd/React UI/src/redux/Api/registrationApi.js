import axios from 'axios'
export function registrationApi(object) {
    return axios.post('http://localhost:3000/register', object ).then(res=>res.data)
 }