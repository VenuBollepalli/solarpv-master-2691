import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import GradeIcon from '@material-ui/icons/Grade';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import TimelineIcon from '@material-ui/icons/Timeline';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import EvStationIcon from '@material-ui/icons/EvStation';
import PowerInputIcon from '@material-ui/icons/PowerInput';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';



export default function Left() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };



  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const [anchorE4, setAnchorE4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorE4(null);
  };


  return <>

    <Paper>
    <MenuList>
       
       <MenuItem component={Link} to={'/User'}>
           <ListItemIcon> <PersonIcon /> </ListItemIcon>
           <Typography variant="inherit">User</Typography>
        </MenuItem>
 
 
        <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
           <Typography variant="inherit">Client</Typography>
        </MenuItem>



        <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <LocationOnIconn /> </ListItemIcon>
           <Typography variant="inherit">Location</Typography>
        </MenuItem>
 
 
 
        
 
       
 
       <MenuItem onClick={handleClick2}> 
          <ListItemIcon> <ViewStreamIcon fontSize="small" /> </ListItemIcon>
           <Typography variant="inherit" noWrap  > Service </Typography>
       </MenuItem>
         <Menu  anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
         <MenuItem onClick={handleClose2}>   <ListItemIcon> <MultilineChartIcon /> </ListItemIcon> <Typography variant="inherit" noWrap>Test StandardID</Typography> </MenuItem>
         </Menu>
 
 
       <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <MultilineChartIcon /> </ListItemIcon>
           <Typography variant="inherit">Test Standard</Typography>
        </MenuItem>

        <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <DragIndicatorIcon /> </ListItemIcon>
           <Typography variant="inherit">product</Typography>
        </MenuItem>


        <MenuItem onClick={handleClick3}> 
         <ListItemIcon> <DAssessmentIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > Performance Data </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
        <MenuItem onClick={handleClose3}>   <ListItemIcon> <MultilineChartIcon /> </ListItemIcon> <Typography variant="inherit" noWrap>Model number </Typography> </MenuItem>   
      </Menu>

      <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <DragIndicatorIcon /> </ListItemIcon>
           <Typography variant="Test Sequence">product</Typography>
        </MenuItem>


        <MenuItem onClick={handleClick4}> 
         <ListItemIcon> <DataUsageIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > Product Factory </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
        <MenuItem onClick={handleClose4}>   <ListItemIcon> <MultilineChartIcon /> </ListItemIcon> <Typography variant="inherit" noWrap>location ID </Typography> </MenuItem>
        <MenuItem onClick={handleClose4}>   <ListItemIcon> <AssessmentIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Product ID </Typography> </MenuItem>
        <MenuItem onClick={handleClose4}>   <ListItemIcon> <SettingsSystemDaydreamIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Contact</Typography> </MenuItem>
      </Menu>


      <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <DragIndicatorIcon /> </ListItemIcon>
           <Typography variant="Test Sequence">Factory Inspection</Typography>
        </MenuItem>

        <MenuItem component={Link} to={'/Client'}>
           <ListItemIcon> <DragIndicatorIcon /> </ListItemIcon>
           <Typography variant="Test Sequence">Expertise</Typography>
        </MenuItem>


 
 
        </MenuList>
    </Paper>








 
   
    </>;
}
