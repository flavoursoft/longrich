import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  biodata: {
      diplay:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'end',
      backgroundColor:'#8345C8',
      height:120,
      color:'#FCFCFC',
      
  },
  details: {
      minHeight:'100%',
      margin:30
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#8345C8' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  color="inherit">
          
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
