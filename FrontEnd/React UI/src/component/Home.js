import React, { Component } from 'react'
import AppBar from "./HomeAppBar";
import PatientForm from './PatientForm';
class Home extends Component{
    render(){      
        return(<div>
            <AppBar/>
            <PatientForm/>
            </div>
        )
}
}
export default Home;