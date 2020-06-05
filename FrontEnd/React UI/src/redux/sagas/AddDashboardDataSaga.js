import {getDataApi} from '../Api/getDataApi'
import { takeLatest, call,put} from 'redux-saga/effects';
import { ChangeData} from '../actions/action'
export function* AddDataWatcherSaga() {
    yield takeLatest("ADD_DATA", DashboardDataEffectSaga);
}
export function* DashboardDataEffectSaga(action) {
    try{
        let data=yield call(getDataApi,action.payload);
        console.log(data);
        yield put(ChangeData(data.data.patient));
    }
    catch(e)
    {
        console.log(e);
    }
}
