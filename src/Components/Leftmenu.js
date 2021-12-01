import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import PresentToAllOutlinedIcon from '@material-ui/icons/PresentToAllOutlined';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AcUnitIcon from '@material-ui/icons/AcUnit';

export default function Leftmenu() {
  


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
  



  return <>
    <Paper>
     
      <MenuList>
       
      <MenuItem component={Link} to={'/'}>
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
       </MenuItem>


       <MenuItem component={Link} to={'/login'}>
          <ListItemIcon> <LockOpenIcon /> </ListItemIcon>
          <Typography variant="inherit">Login</Typography>
       </MenuItem>




       <MenuItem component={Link} to={'/register'}>
          <ListItemIcon> <LockIcon /> </ListItemIcon>
          <Typography variant="inherit">Sign up</Typography>
        </MenuItem>

       <MenuItem component={Link} to={'/user'}>
          <ListItemIcon> <VerifiedUserIcon/> </ListItemIcon>
          <Typography variant="inherit">User</Typography>
        </MenuItem>

        
      

        <MenuItem component={Link} to={'/client'}>
          <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
          <Typography variant="inherit">Client</Typography>
        </MenuItem>

        <MenuItem component={Link} to={'/location'}>
          <ListItemIcon > <MyLocationIcon/> </ListItemIcon>
          <Typography variant="inherit">Location</Typography>
        </MenuItem>


        <MenuItem component={Link} to={'/certificate'}>
          <ListItemIcon> <CastForEducationIcon /> </ListItemIcon>
          <Typography variant="inherit">Certificate</Typography>
        </MenuItem>

        <MenuItem component={Link} to={'/product'}>
          <ListItemIcon> <AddShoppingCartOutlinedIcon/> </ListItemIcon>
          <Typography variant="inherit">Product</Typography>
        </MenuItem>


        <MenuItem component={Link} to={'/teststandard'}>
          <ListItemIcon > <TimelineOutlinedIcon/> </ListItemIcon >
          <Typography variant="inherit">TestStandard</Typography>
        </MenuItem>


        <MenuItem component={Link} to={'/performancedata'}>
          <ListItemIcon > <PresentToAllOutlinedIcon /> </ListItemIcon >
          <Typography variant="inherit">PerformanceData</Typography>
        </MenuItem>

        <MenuItem component={Link} to={'/service'}>
          <ListItemIcon> <AccessibilityIcon/> </ListItemIcon>
          <Typography variant="inherit">Service</Typography>
        </MenuItem>

      


        <MenuItem component={Link} to={'/testsequence'}>
          <ListItemIcon> <AcUnitIcon/> </ListItemIcon>
          <Typography variant="inherit">TestSequence</Typography>
        </MenuItem>

      
       
       
    <MenuItem onClick={handleClick}> 
         <ListItemIcon> <ViewModuleIcon /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > PV Module </Typography>
    </MenuItem>


      <Menu  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to={'/login'}>   <ListItemIcon> <VerifiedUserIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Testing & Certification </Typography> </MenuItem>
        <MenuItem onClick={handleClose}>   <ListItemIcon> <GradeIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>PV Rating </Typography> </MenuItem>
      </Menu>


      <MenuItem onClick={handleClick2}> 
         <ListItemIcon> <DataUsageIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > PV System Perfomance </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <MultilineChartIcon /> </ListItemIcon> <Typography variant="inherit" noWrap>Monitoring  & Inspection </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <AssessmentIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Perfomance Analysis </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <SettingsSystemDaydreamIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Compare system </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <CardMembershipIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Certification </Typography> </MenuItem>
      </Menu>


      <MenuItem onClick={handleClick3}> 
         <ListItemIcon> <TimelineIcon /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > Data Analytics  </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE3} keepMounted open={Boolean(anchorE3)} onClose={handleClose3}>
        <MenuItem onClick={handleClose3}>   <ListItemIcon> <AccessAlarmIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Module lifetime prediction </Typography> </MenuItem>
        <MenuItem onClick={handleClose3}>   <ListItemIcon> <PowerInputIcon  /> </ListItemIcon> <Typography variant="inherit" noWrap>Energy Prediction </Typography> </MenuItem>
      </Menu>



      <MenuItem>
          <ListItemIcon> <VpnLockIcon  /> </ListItemIcon>
          <Typography variant="inherit" noWrap>Cybersecurity and smart Grid Technology </Typography>
        </MenuItem>

  

        <MenuItem>
          <ListItemIcon> <EvStationIcon  /> </ListItemIcon>
          <Typography variant="inherit" noWrap>Solar PV University </Typography>
        </MenuItem>

        

      </MenuList>
    </Paper>
  </>;
}
