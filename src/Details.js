import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, NavLink,  Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Divider, Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import CallEndIcon from '@material-ui/icons/CallEnd';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  const styles = {
    diplay:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'end',
    backgroundColor:'#8345C8',
    height:120,
    color:'#FCFCFC',
  }

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:"Olutimi",
            lastname:"Balogun",
            membershipCode:"NG123",
            stockistCode:"NG001",
            mobile:"08023008263",
            telephone :"2341-27065330",
            address:"12 Balogun street, Ikeja, Lagos",
            year_of_join:"2019",
            contactName:"Victoria Abu"
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://`)

        console.log(id)

    }
    render() {
        const classes = this.props;
        console.log(this.props)
        const id = this.props.match.params.id
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div style ={styles}>
        <Typography style={{textAlign:'center', paddingTop:30}} variant="h6" > {this.state.firstname} {this.state.lastname} {id}</Typography>
                        <Typography style={{textAlign:'center'}} variant="body1" color="inherit">Stockist </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} style={{margin:30}} >
                        <Typography color="textSecondary" variant="body1"><b>Membership Code:</b> {this.state.membershipCode}</Typography>
                        <Typography color="textSecondary" variant="body1"><b>Address: </b> {this.state.address}</Typography>
                        <Typography color="textSecondary" variant="body1"><b>Stockist Code: </b> {this.state.stockistCode}</Typography>
                        <Typography color="textSecondary" variant="body1"><b>Year of joining:</b> {this.state.year_of_join}</Typography>
                        <Typography color="textSecondary" variant="body1" style={{marginBottom:20}}><b>Staff/Contact name: </b> {this.state.contactName} </Typography>

                        <Divider />
                        <Grid item container style={{marginTop:20}}>
                        <Grid item xs={1}>
                            <PhoneIcon fontSize="small" style={{marginTop:10, paddingRight:50}} />
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="body1" style={{ marginBottom:0, fontWeight:400}}>  {this.state.mobile}</Typography>
                            <Typography color="textSecondary" variant="body2" style={{ marginBottom:20}}> Mobile </Typography>
                        </Grid>
                        </Grid>

                        <Divider />
                        <Grid item container style={{marginTop:20}}>
                        <Grid item xs={1}>
                            <CallEndIcon fontSize="small" style={{marginTop:10, paddingRight:50}} />
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="body1" style={{ marginBottom:0, fontWeight:400}}>  {this.state.telephone}</Typography>
                            <Typography color="textSecondary" variant="body2" style={{ marginLeft:0}}> Telephone</Typography>
                        </Grid>
                        </Grid>
                        <br></br>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<PhoneIcon />}
                           // onClick 
                            style={{backgroundColor:'#8345C8'}}
                        >
                           <a style={{textDecoration:'none', color:'#FFFFFF' }} href={`tel:${this.state.mobile}`}> Call</a>
                        </Button>
                    
                        

                    </Grid>
                    <Grid item xs={1}></Grid>

                </Grid>
            </div>
        )
    }
}
