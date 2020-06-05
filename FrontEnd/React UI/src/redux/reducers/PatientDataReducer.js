

const initialState={
    ProductData: [] 
}
const patientDataReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'CHANGE_DATA':{
            return action.payload
        }
        default:return state
    }   
}
export default patientDataReducer;