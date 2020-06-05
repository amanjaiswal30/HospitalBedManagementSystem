import { takeLatest, call} from 'redux-saga/effects';
import history from '../../history'
import {PatientRegistrationApi} from '../Api/PatientRegistrationApi'
export function* AssignBedWatcherSaga() {
    yield takeLatest("ASSIGN_BED", AssignBedEffectSaga);
}
export function* AssignBedEffectSaga(action) {
    try{
        console.log(action.payload.payload)
        yield call(PatientRegistrationApi,action.payload.payload)
        alert("Patient Registration Successful");
        yield call(forwardTo, '/home'); 
    }
    catch(e)
    {
        console.log(e);
    }
}

export function forwardTo(location) {
    history.push(location);
  }