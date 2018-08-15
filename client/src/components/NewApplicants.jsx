import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import TsoIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import GlobeIcon from '@material-ui/icons/Language';

const styles = theme => ({
    paperRoot:  {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    title:      {
        paddingTop: '4%'
    },
    button:     {
        margin: theme.spacing.unit        
    },
    linkText: {
        textDecoration: 'none !important'
    }
  });

function NewApplicants(props){
    const { classes } = props; 

    return(
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Paper className={classes.root} elevation={6}>
                        <Typography 
                        variant="subheading" 
                        gutterBottom
                        align='center'
                        className={classes.title}
                        >
                            Some of the services provided by the Los Angeles Aircraft Certification Office: 
                        </Typography> 
                        <br />                       
                        <List component="nav">
                            <ListItem>
                            <ListItemIcon>
                                <AirplaneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Certification - TC/STC/ATC" />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="DER/ODA Oversight" />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                <TsoIcon />
                            </ListItemIcon>
                            <ListItemText primary="TSOA/PMA Review and Approval" />
                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                                <GlobeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Foreign Validation Support" />
                            </ListItem>                            
                        </List>
                        <Grid container spacing={0} align='center'>
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <br />
                                <a 
                                href="https://www.faa.gov/aircraft/air_cert/locate_office/aco/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className={classes.linkText}
                                >
                                    <Button variant="outlined" color="primary" className={classes.button}>
                                        Contact the LAACO
                                    </Button>
                                </a>
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(NewApplicants);
