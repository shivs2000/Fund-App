import React, { useState ,useEffect} from 'react';
import axios from 'axios';

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea
} from '@material-ui/core';
import { Link } from 'react-router-dom';


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
    container:{
      marginTop:30,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    card:{
      margin: 20
    }
  }));
function Home(props) {
    const classes=useStyles();
    const [data,Setdata]=useState([]);
    const [iniFetch,Setini]=useState('');
    // const [fetch,Setfetch]=useState(false);


    useEffect(() => {
      (async function(){
        //const id=[100038,100044,100049,100051,100052];

            const res=await axios.get(`https://api.mfapi.in/mf`);
       
           
            
            Setdata(res.data);
            console.log(res.data);
        
      
      })();
      // return () => {
      //   cleanup
      // }
    }, []);
    if(data.length>0){



      return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Funds
          </Typography>
       
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
          
          
              {data.map((val,index)=>(
            <Grid item xs={12} sm={8} lg={8} xl={8} key={index} className={classes.card}>
              <Link to={"/details/"+val.schemeCode} style={{textDecoration:'none',}}>
                <CardActionArea>
              <Card >
                <CardContent>
                  <Typography>
                 {val.schemeName}
                  </Typography>
                  </CardContent>
               
                </Card>
                </CardActionArea>
                </Link>
                </Grid>
                
            
              ))
              }
           
        
      </Grid>
    </div>
    );

    }
    else{

      return(<div>
        <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Funds
          </Typography>
       
        </Toolbar>
      </AppBar>
        <h1>
          .....LOADING WAIT
        </h1>
      </div>);
    }

    
}

export default Home;