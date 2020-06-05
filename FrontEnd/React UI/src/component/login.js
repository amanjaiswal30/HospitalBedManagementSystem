import Link from '@material-ui/core/Link';
import React, { Component } from "react";
import '../styles/style.css'
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import DefaultAppBar from './DefaultAppBar'
import {loginWatcher} from '../redux/actions/action'
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loginWatcher
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

 class Login extends Component {
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
            this.props.loginWatcher(
            this.state    
            )
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
                            <DefaultAppBar/>
                            </div>
                            
                        <form className="form" onSubmit={this.onSubmit} >
                        <Typography component="h1" variant="h5" className="typography">Bed Management Application</Typography>
                                <div className="form-group">
                                    <label>Enter your Email</label>
                                    <input type="email" required='required' className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} name="email" onChange={this.formValChange}/>{isError.email.length > 0 && (<span className="invalid-feedback">{isError.email}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter your Password</label>
                                        <input type="password" className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} name="password" onChange={this.formValChange}/>{isError.password.length > 0 && (<span className="invalid-feedback">{isError.password}</span>)}
                                        </div>
                                        <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Remember me"/>
                                        <div>
                                        <button type="submit"  className="btn btn-block btn-success">Login</button>
                                        </div>
                                        <div>
                                        <Link href="#" variant="body2">Forgot password?</Link>
                                        </div>
                                        </form>
                                        </div>
                                        );
                                    }
                                }
                                Login=withRouter(Login);
                                export default connect(null,mapDispatchToProps)(Login);