import {AssignBedEffectSaga, forwardTo, AssignBedWatcherSaga} from '../redux/sagas/AssignBedApiCall';
import { call,takeLatest} from 'redux-saga/effects';
import {PatientRegistrationApi} from '../redux/Api/PatientRegistrationApi'
import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
it("should test generator",()=>{
    const params={
        payload:{
            payload:{
            name:"aman",
            gender:"male",
            address:"bddsd",
            bedRequest:"ICU",
            bedId:104
            }
        }
    };
    const gen=AssignBedEffectSaga(params);
    expect(gen.next().value).toEqual(call(PatientRegistrationApi,params.payload.payload));
    expect(gen.next().value).toEqual(call(forwardTo,'/home'));
    expect(gen.next().done).toEqual(true);
})
it("should test failed case generator",()=>{
    const params={
        payload:{
            payload:{
            name:"aman",
            gender:"male",
            address:"bddsd",
            bedRequest:"ICU",
            bedId:104
            }
        }
    };
    const error={}
    const gen=AssignBedEffectSaga(params);
    expect(gen.next().value).toEqual(call(PatientRegistrationApi,params.payload.payload));
    expect(gen.throw(error).value).toEqual(console.log(error));
})
it('test for watcher',()=>{
    const gen =AssignBedWatcherSaga()
    expect(gen.next().value).toEqual(takeLatest("ASSIGN_BED",AssignBedEffectSaga))
    })
    describe('Patient Registration api test',()=>{
        it('should test api request',()=>{
        const mockRequest = new MockAdapter(Axios);
        const payload = {email:'sahil kumar',
    password:"sdcbsdj"
    }
        const responsePayload = [{authToken:'adsdsdsfa'}]
        mockRequest.onPost('http://localhost:9090/api/patient',payload).reply(200,responsePayload)
        return PatientRegistrationApi(payload).then(responsePayload =>expect(responsePayload).toEqual([{authToken:'adsdsdsfa'}]))
        });
       })
    
