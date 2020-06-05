import {DashboardDataEffectSaga ,AddDataWatcherSaga} from '../redux/sagas/AddDashboardDataSaga'
import { ChangeData } from '../redux/actions/action';
import {getDataApi} from '../redux/Api/getDataApi'
import { call, put,takeLatest } from "redux-saga/effects";
it("should test generator",()=>{
    const action={
        payload:{
            patient:[{}]
        }
    };
     const data={data:{
        patient: [{
            address: "adress",
            bedId: 101,
            bedRequest: "ICU",
            gender: "male",
            id: 1,
            name: "Test User"
    }]}}
    const gen=DashboardDataEffectSaga(action);
    expect(gen.next().value).toEqual(call(getDataApi,action.payload));
    expect(gen.next(data).value).toEqual(put(ChangeData(data.data.patient)));
    expect(gen.next().done).toEqual(true);
})
it("should test catching error",()=>{
    const action={
        payload:{
            patient:[{}]
        }
    };
    const error={}
    const gen=DashboardDataEffectSaga(action);
    expect(gen.next().value).toEqual(call(getDataApi,action.payload));
    expect(gen.throw(error).value).toEqual(console.log(error));
})
it('test for watcher',()=>{
    const gen =AddDataWatcherSaga()
    expect(gen.next().value).toEqual(takeLatest("ADD_DATA",DashboardDataEffectSaga))
    })