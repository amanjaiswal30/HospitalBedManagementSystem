import {registrationApi} from '../Api/registrationApi'
import { takeLatest, call} from 'redux-saga/effects';
import history from '../../history'
export function* AddUserWatcherSaga() {
    yield takeLatest("ADD_USER_WATCHER", AddUserEffectSaga);
}
export function forwardTo(location) {
    history.push(location);
  }
export function* AddUserEffectSaga(action) {
    try{
        yield call(registrationApi, action.payload);
       yield call(forwardTo, '/home');
    }
    catch(e)
    {
        console.log(e);
    }
}
