export  const initialState={
    bedId:null
}
const PatientStatereducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_BED_ID':{
            return action.payload
        }
        default:return state
    }
    
}
export default PatientStatereducer;