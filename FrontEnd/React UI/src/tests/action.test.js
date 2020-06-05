import * as actions from '../redux/actions/action'

describe('change state email', () => {

    it('should create an action to change email state', () => {

      const email = 'aman@gmail.com'

      const expectedAction = {

        type: "CHANGE_NAME",

        payload:email

      }

      expect(actions.changeState("aman@gmail.com")).toEqual(expectedAction)

    })

  })

  describe('change bedId', () => {

    it('should create an action to change bedId state', () => {

      const bedId = 102

      const expectedAction = {

        type: "CHANGE_BED_ID",

        payload:bedId

      }

      expect(actions.changeBedId(102)).toEqual(expectedAction)

    })

  })

  describe('change dashboard data', () => {

    it('should create an action to change dashboard data state', () => {

      const payload = {"patient":[

        {

        "id":23,

         "name":"user",

         "gender":"male", 

      }]}

      const expectedAction = {

        type: "CHANGE_DATA",

        payload:payload

      }

      expect(actions.ChangeData(payload)).toEqual(expectedAction)

    })

  })

  describe('go to login api call saga', () => {

    it('should create an action to call login sagas', () => {

      const payload = {

        email:"xyz",

        password:"gjdbjd"

      }

      const expectedAction = {

        type: "LOGIN_WATCHER",

        payload:payload

      }

      expect(actions.loginWatcher(payload)).toEqual(expectedAction)

    })

  })

  describe('go to add user api call saga', () => {

    it('should create an action to call add user sagas', () => {

      const payload = {

        email:"xyz33",

        password:"gjdbjd"

      }

      const expectedAction = {

        type: "ADD_USER_WATCHER",

        payload:payload

      }

      expect(actions.AddUserWatcher(payload)).toEqual(expectedAction)

    })

  })

  describe('go to add patient api call saga', () => {

    it('should create an action to call add patient sagas', () => {

      const payload = {

        name:"Aman Jaiswal",

        gender:"male",

        address:"Kolkata",

      }

      const expectedAction = {

        type: "ADD_PATIENT_WATCHER",

        payload:payload

      }

      expect(actions.AddPatientWatcher(payload)).toEqual(expectedAction)

    })

  })

  describe('go to assign bed api call saga', () => {

    it('should create an action to call assign bed sagas', () => {

      const payload = {

        bedId:377

      }

      const expectedAction = {

        type: "ASSIGN_BED",

        payload:payload

      }

      expect(actions.AssignBedWatcher(payload)).toEqual(expectedAction)

    })

  })

  describe('go to add dashboard data api call saga', () => {

    it('should create an action to call add dashboard data sagas', () => {

      const payload = {"patient":[

        {

        "id":23,

         "name":"user",

         "gender":"male", 

      }]}

      const expectedAction = {

        type: "ADD_DATA",

        payload:payload

      }

      expect(actions.AddDashboardDataWatcher(payload)).toEqual(expectedAction)

    })

  })

  

