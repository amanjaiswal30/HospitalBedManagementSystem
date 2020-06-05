export const changeState = (email) =>{
    return{
        type:"CHANGE_NAME",
        payload:email
    }
}
export const loginWatcher=(authParams)=> {
    return { type: 'LOGIN_WATCHER', payload: authParams };
  }

  export const AddUserWatcher=(authParams)=>{
      return {type:"ADD_USER_WATCHER",payload:authParams};
  }
  export const AddPatientWatcher=(object)=>{
      return {type:"ADD_PATIENT_WATCHER",payload:object};
  }
  export const changeBedId=(bedId)=>
  {
      return{type:"CHANGE_BED_ID",payload:bedId}
  }
  export const AssignBedWatcher=(object)=>
  {
      return {type:"ASSIGN_BED",payload:object}
  }
  export const AddDashboardDataWatcher=(payload)=>{
    return {type:"ADD_DATA",payload:payload}
  }
  export const ChangeData=(payload)=>{
      return {type:"CHANGE_DATA",payload:payload}
  }