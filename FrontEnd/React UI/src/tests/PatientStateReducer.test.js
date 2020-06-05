import PatientStateReducer from '../redux/reducers/PatientStateReducer'
describe('patientState reducer',()=>{
    it('should return the initial state', ()=>{
        expect(PatientStateReducer(undefined,{})).toEqual(
            {
                bedId:null
            }
        )
    })
    it('should return the state as input',()=>{
        expect(PatientStateReducer({
            bedId:null
        },{
            type:"CHANGE_BED_ID",
            payload:{bedId:102}
        })).toEqual({
                bedId:102
        }
        )
    })
    it('should return the new state as input',()=>{
        expect(PatientStateReducer({
            bedId:102
        },{
            type:"CHANGE_BED_ID",
            payload:{bedId:205}
        })).toEqual({
                bedId:205
        }
        )
    })
})