import axios from 'axios';
export function AvailabilityApi(object) {
    return axios.get(`http://localhost:9092/api/bed/available/${object.bedRequest}`);
 }