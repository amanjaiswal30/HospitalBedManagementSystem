import { all } from 'redux-saga/effects';
import {loginWatcherSaga} from './loginApiCallSaga';
import {AddUserWatcherSaga} from './AddUserApiCallSaga'
import {AddPatientWatcherSaga} from './AddPatientApiCallSaga'
import {AssignBedWatcherSaga} from './AssignBedApiCall'
import {AddDataWatcherSaga} from './AddDashboardDataSaga'
export default function* rootSaga() {
  yield all([AddUserWatcherSaga(),
    AddPatientWatcherSaga(),
    AssignBedWatcherSaga(),
    AddDataWatcherSaga(),
    loginWatcherSaga()]);
}