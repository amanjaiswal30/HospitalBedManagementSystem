
import React, { Component } from "react";
import '../styles/style.css'
import { withRouter } from 'react-router';
import HomeAppBar from './HomeAppBar'
import {connect} from 'react-redux'
import {AddUserWatcher} from '../redux/actions/action'
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      AddUserWatcher
    }, dispatch);
  }


const regExp = RegExp
    (
        /^[^0-9][a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    )
    var strongRegexPass=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");
const formValid = (state) => {
    var data ={
        email : state.email ,
        password : state.password ,
         isValid :state.isValid,
         isRedirect:state.isRedirect
        };
    if(strongRegexPass.test(data.password) && regExp.test(data.email) ){
        data.isValid=true;
        data.isRedirect=true;

    }
    return data.isValid;

};

 class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isValid : false,
            isError: {
                email: '',
                password: ''
            }
        }
    }
    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            this.props.AddUserWatcher(this.state)
        }
    };
    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
                case "email":
                    isError.email = regExp.test(value)
                    ? "": "Email address is invalid";
                    break;
                    case "password":
                        isError.password =strongRegexPass.test(value) ? "" : "Length of Password should be atleast 6 and it should have atleast 1 Uppercase, 1 Lowercase, 1 Numeric Value and a Special Character ";
                        break;
                        default:
                            break;
                        }
                        this.setState({
                            isError,
                            [name]: value
                        })
                    };
                    render() {
                        const { isError } = this.state;
        
                        return (<div>
                        <div>
                            <HomeAppBar/>
                            </div>
                        <form className="form" onSubmit={this.onSubmit} >
                            <legend className="legend">Add User for Access</legend>
                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input type="email" required='required' className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} name="email" onChange={this.formValChange}/>{isError.email.length > 0 && (<span className="invalid-feedback">{isError.email}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} name="password" onChange={this.formValChange}/>{isError.password.length > 0 && (<span className="invalid-feedback">{isError.password}</span>)}
                                        </div>
                                        <div>
                                        <button type="submit"  className="btn btn-block btn-success">Add User</button>
                                        </div>
                                        </form>
                                        </div>
                        );
                                    }
                                }
                                AddUser=withRouter(AddUser);
                                export default connect(null,mapDispatchToProps)(AddUser);