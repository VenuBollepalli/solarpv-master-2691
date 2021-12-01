
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import FormControl from '@material-ui/core/FormControl';
import {useRef,useState} from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const useStyles1 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      // minWidth: 910,
  
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));




function  Register () {

    const classes = useStyles();
const classes1 = useStyles1();

    const [age, setAge] = useState('');
    const [usstate, setusstate] = useState('');


    const [uservalid, setuservalid] = useState(false);
    const [passwordvalid, setpasswordvalid] = useState(false);



    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChangestate = (event) => {
      setusstate(event.target.value);
    };


 const usernameref = useRef();
 const paswordref = useRef();




    const formsubmithandler = event => {
      event.preventDefault();
    
if(usernameref.current.value.trim() ==="")
{
  setuservalid(true);
}
else{
  setuservalid(false);
}


if(paswordref.current.value.trim() ==="")
{
  setpasswordvalid(true);
}
else{
  setpasswordvalid(false);
}
   
      console.log("submit success");
};



const handleuserChange = (event) => {
  
  console.log(event.target.value)

  if(event.target.value === '')
  {
    setuservalid(true);
  }
  else{
    setuservalid(false);
  }
 
};


const handlepasswordChange = (event) => {
  
  console.log(event.target.value)

  if(event.target.value === '')
  {
    setpasswordvalid(true);
  }
  else{
    setpasswordvalid(false);
  }
 
};



return <>


<Container component="main" maxWidth="md">
  
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>


        
        <form className={classes.form} noValidate onSubmit={formsubmithandler}>
          <Grid container spacing={2}>
           


          <Grid item xs={12}>
              <TextField inputRef = {usernameref} error={uservalid} variant="outlined" required fullWidth id="username" label="Username" name="username" onChange={handleuserChange}  helperText= { uservalid && "Required."} autoFocus/>
         
        
          </Grid>

          <Grid item xs={12}>
              <TextField inputRef = {paswordref}  error={passwordvalid} variant="outlined" required fullWidth name="password" label="Password" onChange={handlepasswordChange} type="password" id="password" helperText= { passwordvalid && "Required."}/>
            </Grid>
           

            <Grid item xs={12} sm={4}>
              <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" />
            </Grid>


            <Grid item xs={12} sm={4}>
              <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname"/>
            </Grid>


            <Grid item xs={12} sm={4}>
              <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="Middle Name" />
            </Grid>


            <Grid item xs={12} sm={12}>
             
            
                 <FormControl variant="outlined"  style={{width:"100%"}}>
      
                    <InputLabel id="demo-simple-select-outlined-label" >Age</InputLabel>
    
                     <Select labelId="demo-simple-select-outlined-label"  className={classes1.formControl} id="demo-simple-select-outlined" value={age} onChange={handleChange} label="Age" >
                   
                     <MenuItem >None</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                     </Select>
                    </FormControl>

            </Grid>

            <Grid item xs={12} sm={12}>
            <TextField variant="outlined" required fullWidth id="Streetaddress" label="Street address" name="Streetaddress" autoComplete="Streetaddress"/>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="City" label="City" name="City" autoComplete="City"/>
            </Grid>

        

            <Grid item xs={12} sm={6}>
               
            <FormControl variant="outlined" style={{width:"100%"}} >
                <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>

                 <Select labelId="demo-simple-select-outlined-label"  className={classes1.formControl} id="demo-simple-select-outlined" value={usstate} onChange={handleChangestate} label="Age">
               
                 <MenuItem >None</MenuItem>
              
    <MenuItem value={"AL"}>Alabama</MenuItem>
	<MenuItem value={"AK"}>Alaska</MenuItem>
	<MenuItem value={"AZ"}>Arizona</MenuItem>
	<MenuItem value={"AR"}>Arkansas</MenuItem>
	<MenuItem value={"CA"}>California</MenuItem>
	<MenuItem value={"CO"}>Colorado</MenuItem>
	<MenuItem value={"CT"}>Connecticut</MenuItem>
	<MenuItem value={"DE"}>Delaware</MenuItem>
	<MenuItem value={"DC"}>District Of Columbia</MenuItem>
	<MenuItem value={"FL"}>Florida</MenuItem>
	<MenuItem value={"GA"}>Georgia</MenuItem>
	<MenuItem value={"HI"}>Hawaii</MenuItem>
	<MenuItem value={"ID"}>Idaho</MenuItem>
	<MenuItem value={"IL"}>Illinois</MenuItem>
	<MenuItem value={"IN"}>Indiana</MenuItem>
	<MenuItem value={"IA"}>Iowa</MenuItem>
	<MenuItem value={"KS"}>Kansas</MenuItem>
	<MenuItem value={"KY"}>Kentucky</MenuItem>
	<MenuItem value={"LA"}>Louisiana</MenuItem>
	<MenuItem value={"ME"}>Maine</MenuItem>
	<MenuItem value={"MD"}>Maryland</MenuItem>
	<MenuItem value={"MA"}>Massachusetts</MenuItem>
	<MenuItem value={"MI"}>Michigan</MenuItem>
	<MenuItem value={"MN"}>Minnesota</MenuItem>
	<MenuItem value={"MS"}>Mississippi</MenuItem>
	<MenuItem value={"MO"}>Missouri</MenuItem>
	<MenuItem value={"MT"}>Montana</MenuItem>
	<MenuItem value={"NE"}>Nebraska</MenuItem>
	<MenuItem value={"NV"}>Nevada</MenuItem>
	<MenuItem value={"NH"}>New Hampshire</MenuItem>
	<MenuItem value={"NJ"}>New Jersey</MenuItem>
	<MenuItem value={"NM"}>New Mexico</MenuItem>
	<MenuItem value={"NY"}>New York</MenuItem>
	<MenuItem value={"NC"}>North Carolina</MenuItem>
	<MenuItem value={"ND"}>North Dakota</MenuItem>
	<MenuItem value={"OH"}>Ohio</MenuItem>
	<MenuItem value={"OK"}>Oklahoma</MenuItem>
	<MenuItem value={"OR"}>Oregon</MenuItem>
	<MenuItem value={"PA"}>Pennsylvania</MenuItem>
	<MenuItem value={"RI"}>Rhode Island</MenuItem>
	<MenuItem value={"SC"}>South Carolina</MenuItem>
	<MenuItem value={"SD"}>South Dakota</MenuItem>
	<MenuItem value={"TN"}>Tennessee</MenuItem>
	<MenuItem value={"TX"}>Texas</MenuItem>
	<MenuItem value={"UT"}>Utah</MenuItem>
	<MenuItem value={"VT"}>Vermont</MenuItem>
	<MenuItem value={"VA"}>Virginia</MenuItem>
	<MenuItem value={"WA"}>Washington</MenuItem>
	<MenuItem value={"WV"}>West Virginia</MenuItem>
	<MenuItem value={"WI"}>Wisconsin</MenuItem>
	<MenuItem value={"WY"}>Wyoming</MenuItem>


                 </Select>
                 </FormControl>

        </Grid>



            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="zipcode" label="Zip code" name="Zipcode" autoComplete="Zip code"/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="Email" label="Email" name="Email" autoComplete="Email"/>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="Cell phone number" label="Cell phone number" name="cellphonenumber" autoComplete="cellphonenumber"/>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="Countryoforigin" label="Country of Origin" name="Countryoforigin" autoComplete="Countryoforigin"/>
            </Grid>


            <Grid item xs={12} sm={6}>
  
            <TextField style={{width:"100%"}}  id="DateofBirth" variant="outlined" required label="Date of Birth" type="date" className={classes.textField} InputLabelProps={{ shrink: true,}}/>
         
            </Grid>






            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="MemberOrganization" label="Member Organization" name="MemberOrganization" autoComplete="MemberOrganization"/>
            </Grid>
           
           
            <Grid item xs={12} sm={6}>
            <TextField variant="outlined" required fullWidth id="Compnaysolarpv" label="Compnay solarpv" name="Compnaysolarpv" autoComplete="Compnaysolarpv"/>
            </Grid>          
          </Grid>


          <Button  type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign Up</Button>
    
    
        </form>
      </div>
     
    </Container>


</>


}

export default Register;
