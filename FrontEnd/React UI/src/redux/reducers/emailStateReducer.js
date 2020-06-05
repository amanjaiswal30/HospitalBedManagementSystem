
export  const initialState={
    email:""
}
const emailStatereducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':{
            return action.payload
        }
        default:return state
    }
    
}
export default emailStatereducer;