import {loginEffectSaga, forwardTo,loginWatcherSaga} from '../redux/sagas/loginApiCallSaga'
import { call, put,takeLatest } from 'redux-saga/effects';
import { changeState } from '../redux/actions/action';
import {loginApi} from '../redux/Api/loginApi'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
it("should test generator",()=>{
    const params={
        payload:{
            email:"djbejdbe",
            password:"dedrfrf"
        }
    };
    const gen=loginEffectSaga(params);
    expect(gen.next().value).toEqual(call(loginApi,params.payload));
    expect(gen.next().value).toEqual(put(changeState(params.payload.email)));
    expect(gen.next().value).toEqual(call(forwardTo,'/home'));
    expect(gen.next().done).toEqual(true);
})
it("should test failed case generator",()=>{
    const params={
        payload:{
            email:"djbejdbe",
            password:"dedrfrf"
        }
    };
    const error={}
    const gen=loginEffectSaga(params);
    expect(gen.next().value).toEqual(call(loginApi,params.payload));
    expect(gen.throw(error).value).toEqual(call(forwardTo,'/loginerror'));
}) 
it('test for watcher',()=>{
    const gen =loginWatcherSaga()
    expect(gen.next().value).toEqual(takeLatest("LOGIN_WATCHER",loginEffectSaga))
    })
describe('Login api test',()=>{
    it('should test api request',()=>{
    const mockRequest = new MockAdapter(Axios);
    const payload = {email:'sahil kumar',
password:"sdcbsdj"
}
    const responsePayload = [{authToken:'adsdsdsfa'}]
    mockRequest.onPost('http://localhost:3000/authenticate',payload).reply(200,responsePayload)
    return loginApi(payload).then(responsePayload =>expect(responsePayload).toEqual([{authToken:'adsdsdsfa'}]))
    });
   })
