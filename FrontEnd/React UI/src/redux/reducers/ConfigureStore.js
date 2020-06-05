import rootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux'
import rootSaga from '../sagas/rootSaga'
const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);
function saveToLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e){
    }
}
  function loadToLocalStorage(){
    try{
        const serializedState=localStorage.getItem('state')
        if(serializedState===null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        return undefined
    }
}
export const persistedState=loadToLocalStorage()
export const store=createStore(rootReducer,persistedState,middlewares); 
sagaMiddleware.run(rootSaga);
store.subscribe(()=>saveToLocalStorage(store.getState()))



