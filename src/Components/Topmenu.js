import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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

export default function Topmenu() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         

           <Avatar alt="Remy Sharp" src="https://www.eqmagpro.com/wp-content/uploads/2019/04/Bolivia-joins-International-Solar-Alliance.jpg" className={classes.large} />

          <Typography variant="h6" className={classes.title}>
            Solar PV<br/>
            Research & Development
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>About Us</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Social Media links</Button>
        </Toolbar>
      </AppBar>
    </div>



    <Dialog  open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          About
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Solar cells, also called photovoltaic cells, convert sunlight directly into electricity. 
          Photovoltaics (often shortened as PV) gets its name from the process of converting light (photons) to electricity (voltage), which is called the photovoltaic effect.   
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>


  </>;
}
 