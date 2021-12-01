
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
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 2),
    },
  }));
  
  const useStyles1 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      // minWidth: 910,
  
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));




function  Product () {

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
          <AddShoppingCartOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Product
        </Typography>
        


        
        <form className={classes.form} noValidate onSubmit={formsubmithandler}>
          <Grid container spacing={1}>
           

        


            

            <Grid item xs={8} sm={4}>
              <TextField variant="outlined" required fullWidth id=" product name" label=" Product Name" name="Product name" autoComplete=" Product name"/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="cell technology" label="Cell Technology" name="cell technology" autoComplete="cell technology"/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="cell manfacture" label="Cell Manfacture" name="cell manfacture " autoComplete="cell manfacture "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="number of cells " label="Number of Cells" name="number of cells " autoComplete="number of cells "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="number of cells in series" label="Number of Cells in Series" name="number of cells in series" autoComplete="number of cellsin series "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="number of series strings " label="Number of Series Strings" name="number of series strings " autoComplete="number of series strings "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="number of diodes " label="Number of Diodes" name="number of diodes " autoComplete="number of diodes "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="product length " label="Product length" name="product length " autoComplete="product length "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="product width " label="Product Width" name="product width " autoComplete="product width "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="product weight  " label="Product Weight" name="product weight " autoComplete="product weight "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="superstrate type " label="Superstrate Type" name="superstrate type " autoComplete="superstrate type "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="superstrate manfacture" label="Superstrate Manfacture" name="superstrate manfacture " autoComplete="superstrate manfacture "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="substrate type" label="Substrate Type" name="substrate type " autoComplete="substrate type "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="substrate manfacture " label="Substrate Manfacture" name="substrate manfacture " autoComplete="substrate manfacture "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="frame type " label="Frame Type" name="frame type " autoComplete="frame type "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="frame adhesive " label="Frame Adhesive" name="frame adhesive " autoComplete="frame adhesive "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="encapsulant type " label="Encapsulant Type" name="encapsulant type " autoComplete="encapsulant type "/>
            </Grid>


            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="encapsulant manufacture " label="Encapsulant Manufacture" name="encapsulant manufacture " autoComplete="encapsulant manufacture"/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="junction box type " label="Junction Box Type" name="junction box type " autoComplete="junction box type "/>
            </Grid>

            <Grid item xs={8} sm={8}>
            <TextField variant="outlined" required fullWidth id="junction box manufacturer " label="Junction Box Manufacturer" name="junction box manufacturer " autoComplete="junction box manufacturer "/>
            </Grid>


            



            
          </Grid>


          <Button  type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sumit</Button>
    
    
        </form>
      </div>
     
    </Container>


</>


}

export default Product;
