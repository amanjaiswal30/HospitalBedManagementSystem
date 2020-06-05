import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/reducers/ConfigureStore'
import {Provider} from 'react-redux'
import { Router,Route, Redirect, Switch} from 'react-router-dom';
import Home from './component/Home';
import LoginErrorMessage from './component/LoginErrorMessage';
import history from './history'
import DashBoard from './component/DashBoard'
import AddUser from './component/AddUser';
const PrivateRoute=({component:Cmp,...rest})=>(
     <Route {...rest} render={(props)=>(
         localStorage.getItem('login')?(<Cmp{...props}/>):<Redirect to="/"/>
     )}
     />
 )  

ReactDOM.render(
<Router history={history}><Switch><Provider store={store}>
    <Route exact path="/" component={App}/>
    <PrivateRoute path="/home" component={Home}/>
    <PrivateRoute path="/dashboard" component={DashBoard}/>
    <PrivateRoute path="/adduser" component={AddUser}/>
    <Route path="/loginerror" component={LoginErrorMessage}/>
    </Provider>
    </Switch>
    </Router>
, document.getElementById('root'));