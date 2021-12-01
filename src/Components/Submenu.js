import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Submenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <>
    
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Racks  Tracks" />
        <Tab label="PV Modules" />
        <Tab label="PV Systems" />
        <Tab label="Data Analytics" />
        <Tab label="Cyber Security" />
        <Tab label="Client" />
        <Tab label="Location" />
        <Tab label="Product" />
        <Tab label="Certificate" />
      </Tabs>
    </Paper>


  </>;
}
