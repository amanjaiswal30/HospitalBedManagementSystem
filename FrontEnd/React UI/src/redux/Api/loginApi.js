import axios from 'axios'
export function loginApi(object) {
    return axios.post('http://localhost:3000/authenticate', object ).then(res=>res.data)
 }