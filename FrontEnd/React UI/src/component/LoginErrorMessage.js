import React, { Component } from 'react'
import '../styles/style.css'
import DefaultAppBar from '../component/DefaultAppBar'
class LoginErrorMessage extends Component{
    render(){
        return (<div>
            <div>
                <DefaultAppBar/>
            </div>
                 <form className="form">
                     <legend className="legend">Invalid Credentials</legend>
                     <button  className="btn btn-block btn-success" onClick={()=>{this.props.history.push('/')}}>Click To Login </button>
                 </form>
                 </div>
           
        )
    }
}
export default LoginErrorMessage;