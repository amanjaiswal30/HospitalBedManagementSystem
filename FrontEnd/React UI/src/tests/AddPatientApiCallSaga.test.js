import { AddPatientEffectSaga, AddPatientWatcherSaga } from "../redux/sagas/AddPatientApiCallSaga";
import { call, put,takeLatest } from "redux-saga/effects";
import {AvailabilityApi} from '../redux/Api/AvailabilityApi'
import { changeBedId, AssignBedWatcher, AddPatientWatcher } from "../redux/actions/action";
it("should test generator",()=>{
    const action={
        payload:{
            address:"kolkata",
            gender:"male",
            name:"xyz",
            bedRequest:"ICU"
        }
    };
     const data={data:{
        id:105
    }}
    const obj={
        payload:{
            address:action.payload.address,
            gender:action.payload.gender,
            name:action.payload.name,
            bedRequest:action.payload.bedRequest,
            bedId:data.data.id
        }
    }
    const gen=AddPatientEffectSaga(action);
    expect(gen.next().value).toEqual(call(AvailabilityApi,action.payload));
    expect(gen.next(data).value).toEqual(put(changeBedId(data.data.id)));
    expect(gen.next().value).toEqual(put(AssignBedWatcher(obj)));
    expect(gen.next().done).toEqual(true);
})
it("should test error ",()=>{
    const action={
        payload:{
            bedRequest:104
        }
    }
    const error={}
    const gen=AddPatientEffectSaga(action);
    expect(gen.next().value).toEqual(call(AvailabilityApi,action.payload));
    expect(gen.throw(error).value).toEqual(console.log(error));
})
it('test for watcher',()=>{
    const gen =AddPatientWatcherSaga()
    expect(gen.next().value).toEqual(takeLatest("ADD_PATIENT_WATCHER",AddPatientEffectSaga))
    })