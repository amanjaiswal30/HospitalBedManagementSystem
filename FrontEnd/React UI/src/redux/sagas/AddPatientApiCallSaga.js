import { takeLatest, call,put} from 'redux-saga/effects';
import {changeBedId} from '../actions/action'
import {AssignBedWatcher} from '../actions/action'
import {AvailabilityApi} from '../Api/AvailabilityApi'
export function* AddPatientWatcherSaga() {
    yield takeLatest("ADD_PATIENT_WATCHER", AddPatientEffectSaga);
}
export function* AddPatientEffectSaga(action) {
    try{
        let  data  = yield call(AvailabilityApi, action.payload);
        console.log(data.data.id);
        yield put(changeBedId(data.data.id));
        const obj=
        {
            payload:{
            address:action.payload.address,
            gender:action.payload.gender,
            name:action.payload.name,
            bedRequest:action.payload.bedRequest,
            bedId:data.data.id 
            }  
        }
        yield put(AssignBedWatcher(obj))
    }
    catch(e)
    {
        alert("No available bed for the selected BedType");
        console.log(e);
        
    }
}
