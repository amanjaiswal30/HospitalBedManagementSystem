import PatientDataReducer from '../redux/reducers/PatientDataReducer'
describe('patientData reducer',()=>{
    it('should return the initial state', ()=>{
        expect(PatientDataReducer(undefined,{})).toEqual(
            {
                ProductData:[]
            }
        )
    })
    it('should return the state as input',()=>{
        expect(PatientDataReducer({
            ProductData:[]
        },{
            type:"CHANGE_DATA",
            payload:{
                "patient":[
                    {
                    "id":23,
                     "name":"user",
                     "gender":"male", 
                  }]
            }
        })).toEqual({
            "patient":[
                {
                "id":23,
                 "name":"user",
                 "gender":"male", 
              }]
        }
        )
    })
})