import React, { Component } from 'react'
import '../styles/style.css'
import {AddPatientWatcher} from '../redux/actions/action'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {AssignBedWatcher} from '../redux/actions/action'
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      AddPatientWatcher,AssignBedWatcher
    }, dispatch);
  }
  const mapStateToProps=(state)=>{
    return {
      bedId:state.PatientStateReducer
    }
  }
 class PatientForm extends Component {
    constructor(props){
        super(props);
        this.state={
            address:'',
            gender:'',
            name:'',
            bedRequest:'',
            bedId:null
        }
   
    }
    static getDerivedStateFromProps(props,state)
    {
        if(props.bedId!==state.bedId)
        {
            return {bedId:props.bedId}
        }
        return null;
        
    }
    onChange=(event)=>{
        let value=event.target.name;
        this.setState({
            [value]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.AddPatientWatcher(this.state);
    }
    render() {
        return (
                <form className="form" onSubmit={this.handleSubmit}>
                    <legend className="legend1">Patient Admission Form</legend>
                    <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="input-name"required="required" name="name" id="name" onChange={this.onChange}></input>
                    </div>
                    <div className="form-group">
                    <label>Address:</label>
                    <input type="text" required="required" className="input-address"name="address" id="address" onChange={this.onChange}></input>
                    </div>
                    <div className="form-group">
                    <label>Reason/Ailment :</label>
                    <input type="text" className="input-reason"required="required" name="address" id="address"></input>
                    </div>
                    <div className="form-group">
                    <label>Gender: </label>
                    <select name="gender" onChange={this.onChange} className="input-gender">
                        <option>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label>Bed Request:</label>
                    <select name="bedRequest" onChange={this.onChange}className="input-request">
                        <option>Select bed</option>
                        <option value="ICU">ICU</option>
                        <option value="Isolation">Isolation</option>
                        <option value="OPD">OPD</option>
                        <option value="Emergency">Emergency</option>
                    </select>
                    </div>
                    <button type="submit"  className="btn btn-block btn-success">Submit</button>
                </form>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PatientForm);