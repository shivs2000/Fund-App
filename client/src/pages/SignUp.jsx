import React, { useState } from 'react';
import axios from 'axios';
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    TextField,
    Paper, 
    Avatar,
    Link,
    Checkbox  
} from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  
  }));
function SignUp(props) {
    const classes=useStyles();
   const [un,Setun]=useState('');
   const [pass,Setpass]=useState('');
   const [fn,Setfn]=useState('');
   const [ln,Setln]=useState('');
   const [email,Setemail]=useState('');
    const paperStyle={padding :20,height:'65vh',width:300, margin:"55px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const usernameChange=()=>{
            
    }
    const history=useHistory();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Funds
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required onChange={
                    (e)=>{
                Setun(e.target.value);
                    }
                }/>
                <TextField label='firstname' placeholder='Enter username' fullWidth required
                onChange={
                    (e)=>{
                Setfn(e.target.value);
                    }
                }/>
                <TextField label='lastname' placeholder='Enter username' fullWidth required
                onChange={
                    (e)=>{
                Setln(e.target.value);
                    }
                }/>
                <TextField label='email' placeholder='Enter username'  type='email' fullWidth required
                onChange={
                    (e)=>{
                Setemail(e.target.value);
                    }
                }/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                onChange={
                    (e)=>{
                Setpass(e.target.value);
                    }
                }/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                
                
                
                onClick={(e)=>{
                    e.preventDefault();
                    if(un && pass && fn&&ln &&email){
                       axios.post('http://localhost:5000/createUser',{

                       username:un,
                       firstname:fn,
                       lastname:ln,
                       email:email,
                       password:pass
                       })
                        .then(()=>{
                             history.push('/home');
                        })
                        .catch((e)=>{
                            return(<>
                            <h1>
                                ERROR OCCURED
                            </h1>
                            </>)
                        })
                    }
                    else{
                        console.log("ENTER EVERYTHING")
                    }
                   
                }}>SignUp</Button>
                
               
            </Paper>
        </Grid>
    </div>
    );
}

export default SignUp;