import axios from 'axios'

export function PatientRegistrationApi(object)
{
   return  axios.post("http://localhost:9090/api/patient",object).then(res=>res.data);   
}