 import {AddUserEffectSaga, forwardTo, AddUserWatcherSaga} from '../redux/sagas/AddUserApiCallSaga'
import {registrationApi} from '../redux/Api/registrationApi'
 import { call ,takeLatest} from 'redux-saga/effects';
 import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { AvailabilityApi } from '../redux/Api/AvailabilityApi';
import { getDataApi } from '../redux/Api/getDataApi';

it("should test generator",()=>{
    const params={
        payload:{
            email:"djbejdbe",
            password:"dedrfrf"
        }
    };
    const gen=AddUserEffectSaga(params);
    expect(gen.next().value).toEqual(call(registrationApi,params.payload));
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
    const gen=AddUserEffectSaga(params);
    expect(gen.next().value).toEqual(call(registrationApi,params.payload));
    expect(gen.throw(error).value).toEqual(console.log(error));
})
it('test for watcher',()=>{
    const gen =AddUserWatcherSaga()
    expect(gen.next().value).toEqual(takeLatest("ADD_USER_WATCHER",AddUserEffectSaga))
    })
    describe('Add user api test',()=>{
        it('should test api request',()=>{
        const mockRequest = new MockAdapter(Axios);
        const payload = {email:'sahil kumar',
    password:"sdcbsdj"
    }
        const responsePayload = [{authToken:'adsdsdsfa'}]
        mockRequest.onPost('http://localhost:3000/register',payload).reply(200,responsePayload)
        return registrationApi(payload).then(responsePayload =>expect(responsePayload).toEqual([{authToken:'adsdsdsfa'}]))
        });
       })
       describe('Add bed availability api test',()=>{
        it('should test api request',()=>{
        const mockRequest = new MockAdapter(Axios);
        const payload = {bedRequest:"ICU"}
        const responsePayload = {data:[{authToken:'adsdsdsfa'}]}
        mockRequest.onGet(`http://localhost:9092/api/bed/available/${payload.bedRequest}`).reply(200,responsePayload.data)
        return AvailabilityApi(payload).then(responsePayload =>expect(responsePayload.data).toEqual([{authToken:'adsdsdsfa'}]))
        });
       })
       describe('get patient details api test',()=>{
        it('should test api request',()=>{
        const mockRequest = new MockAdapter(Axios);
        const payload = {patient:"sfsdf"}
        const responsePayload = {data:[{authToken:'adsdsdsfa'}]}
        mockRequest.onGet(`http://localhost:9090/api/patient`).reply(200,responsePayload.data)
        return getDataApi(payload).then(responsePayload =>expect(responsePayload.data).toEqual([{authToken:'adsdsdsfa'}]))
        });
       })