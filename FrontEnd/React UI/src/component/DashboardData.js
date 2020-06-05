import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import {AddDashboardDataWatcher} from '../redux/actions/action'
import { bindActionCreators } from 'redux';
import { withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import '../styles/style.css'
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    AddDashboardDataWatcher
  }, dispatch);
}
const mapStateToProps=(state)=>{
  return {
    ProductData:state.PatientDataReducer
  }
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
export class MatTable extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      ProductData: [
        {
        address: "adress",
        bedId: 651,
        bedRequest: "ICU",
        gender: "male",
        id: 1,
        name: "Test User"
      }
      ]  
    }  
  }  
  static getDerivedStateFromProps(props,state)
  {
      if(props.ProductData!==state.ProductData)
      {
          return {ProductData:props.ProductData}
      }
      return null;
      
  }
  componentDidMount() {  
    
    this.props.AddDashboardDataWatcher(this.state); 
    
  }  
  render() {  
    // this.props.AddDashboardDataWatcher(this.state); 
    return (
      <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead className="table-head">  
            <TableRow>  
              <StyledTableCell>Patient Id</StyledTableCell>   
              <StyledTableCell align="right">Gender</StyledTableCell>  
              <StyledTableCell align="right">Name</StyledTableCell>  
              <StyledTableCell align="right">Address</StyledTableCell>  
              <StyledTableCell align="right">Assigned BedID</StyledTableCell>
              <StyledTableCell align="right">Bed Type</StyledTableCell>    
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              this.state.ProductData.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {p.id}  
                  </TableCell>  
                  <TableCell align="right">{p.gender}</TableCell>  
                  <TableCell align="right">{p.name}</TableCell>  
                  <TableCell align="right">{p.address}</TableCell>
                  <TableCell align="right">{p.bedId}</TableCell>
                  <TableCell align="right">{p.bedRequest}</TableCell>         
                </TableRow>  
              })  
            }  

          </TableBody>  
        </Table>  
      </TableContainer> 
    );  
  }  
}  
export default connect(mapStateToProps,mapDispatchToProps)(MatTable); 