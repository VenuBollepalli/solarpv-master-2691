import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {



    return <>
 <AppBar position="static" color="Default">
          <Container maxWidth="md">


          <Typography variant="body1" c>
            Solar Pv
            </Typography> 
            <Toolbar>
              <Typography variant="body1" align="right">
                © 2019 All Rights Reserved
              </Typography>
            </Toolbar> 
            
            <Typography variant="body1" >
                Address, Phone, Email, Website
            </Typography>
            
            
            

            <Typography variant="body1" color="inherit">
              Site Map | Terms & Conditions | Privacy Policy | About Us
              </Typography>
          </Container>
        </AppBar>
    </>

}