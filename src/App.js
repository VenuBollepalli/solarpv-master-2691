
import Grid from '@material-ui/core/Grid';
import Topmenu from './Components/Topmenu';
import Leftmenu from './Components/Leftmenu';
import Rightcontent from './Components/Rightcontent';
import Login from './Components/Login';
import Register from './Components/Register';
import Submenu from './Components/Submenu';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {Route,Switch} from 'react-router-dom';
import User from './Components/User';
import Client from './Components/Client';
import Location from './Components/Location';
import Certificate from './Components/Certificate';
import Product from './Components/Product';
import TestStandard from './Components/TestStandard';
import PerformanceData from './Components/PerformanceData';
import Service from'./Components/Service';
import TestSequence from './Components/TestSequence';

function App() {

 
  
  
  return <>
 
    <Grid container >
         <Grid item xs={12}>
              <Topmenu/>
          </Grid>

          <Grid item xs={12} style={{margin:"2px"}}>
              <Submenu/>
          </Grid>


    <Grid item xs={2}>
            <Leftmenu/>
    </Grid>


    <Grid item xs={8} >


         <Switch>

         <Route path = "/" exact>
            <Home/>
          </Route>

              <Route path = "/login" exact>
              <Login/>
              </Route>

               <Route path = "/register" exact>
                    <Register/>
                </Route>

                <Route path = "/user" exact>
                    <User/>
                </Route>

                <Route path = "/client" exact>
                    <Client/>
                </Route>

                <Route path = "/location" exact>
                    <Location/>
                </Route>


                <Route path = "/certificate" exact>
                    <Certificate/>
                </Route>

                <Route path = "/Product" exact>
                    <Product/>
                </Route>

                
                <Route path = "/teststandard" exact>
                    <TestStandard/>
                </Route>

                <Route path = "/performancedata" exact>
                    <PerformanceData/>
                </Route>

                <Route path = "/Service" exact>
                    <Service/>
                </Route>


                <Route path = "/TestSequence" exact>
                    <TestSequence/>
                </Route>

                

               
         </Switch>


  
    </Grid>

    <Grid item xs={2}>
             <Rightcontent/>
    </Grid>
    <Grid item xs={12}>
             <Footer/>
    </Grid>

    </Grid>

  </>;
}

export default App;
