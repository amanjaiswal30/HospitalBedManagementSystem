import {loginApi} from '../Api/loginApi'
import { takeLatest, call ,put} from 'redux-saga/effects';
import { changeState } from '../actions/action';
import history from '../../history'
export function* loginEffectSaga(action) {
    try{
        yield call(loginApi, action.payload);
        yield put(changeState(action.payload.email));
        localStorage.setItem('login',action.payload.email);
       yield call(forwardTo, '/home');
    }
    catch(e)
    {
        yield call(forwardTo, '/loginerror');
    }
}

export function* loginWatcherSaga() {
    yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
  }
 export function forwardTo(location) {
    history.push(location);
  }