import {combineReducers} from 'redux';
import emailStateReducer from './emailStateReducer'
import PatientStateReducer from './PatientStateReducer'
import PatientDataReducer from './PatientDataReducer'
const rootReducer = combineReducers({
    emailStateReducer,
    PatientStateReducer,
    PatientDataReducer
});
export default rootReducer;