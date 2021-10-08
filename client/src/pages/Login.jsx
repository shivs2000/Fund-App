import React, { useState } from 'react';

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

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
function Login(props) {
    const classes=useStyles();
    const [un,Setun]=useState('');
    const [pass,Setpass]=useState('');
    const paperStyle={padding :20,height:'50vh',width:280, margin:"55px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    

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
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required
                 onChange={(e)=>{Setun(e.target.value)}}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                 onChange={(e)=>{Setpass(e.target.value)}}
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                onClick={(e)=>{
                    e.preventDefault();
                    if(un && pass){
                       axios.post('https://localhost:5000/login')
                        .then(()=>{
                             history.push('/home');
                        })
                    }
                   
                }}
                
                >Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/SignUp" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    </div>
    );
}

export default Login;