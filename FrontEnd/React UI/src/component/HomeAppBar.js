import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import history from '../history'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, lightBlue, blue } from '@material-ui/core/colors'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const mapStateToProps=(state)=>{
  return {
    myemail:state.emailStateReducer
  }
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

 function SearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    localStorage.clear();
    history.push('/');
  }
  const handleAddUser=()=>{
    history.push('/adduser')
  }
  const handleRegisterUser=()=>{
    history.push('/home');
  }
  const handleDashboard=()=>{
    history.push('/dashboard');
  }
const classes=useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src="/broken-image.jpg"className={classes.orange}/>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.myemail}
          </Typography>
          <Button className={classes.inputRoot}aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAddUser}>Add User</MenuItem>
        <MenuItem onClick={handleRegisterUser}>Register Patient</MenuItem>
        <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
          
}
SearchAppBar=withRouter(SearchAppBar);
export default connect(mapStateToProps,null)(SearchAppBar);