import emailStateReducer from '../redux/reducers/emailStateReducer'
describe('emailState reducer',()=>{
    it('should return the initial state', ()=>{
        expect(emailStateReducer(undefined,{})).toEqual(
            {
                email:""
            }
        )
    })
    it('should return the state as input',()=>{
        expect(emailStateReducer({},{
            type:"CHANGE_NAME",
            payload:{email:"aman123"}
        })).toEqual({
                email:"aman123"
        }
        )
    })
    it('should return the new state as input',()=>{
        expect(emailStateReducer({
            email:"xyz"
        },{
            type:"CHANGE_NAME",
            payload:{email:"aman123"}
        })).toEqual({
                email:"aman123"
        }
        )
    })
})