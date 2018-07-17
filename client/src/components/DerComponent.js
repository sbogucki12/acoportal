import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import WorkIcon from '@material-ui/icons/Work';
import ProfileIcon from '@material-ui/icons/PermIdentity';
import EventIcon from '@material-ui/icons/EventAvailable';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
      textDecoration: 'none !important'
  },
  button: {
    margin: theme.spacing.unit
  },
});

function DerComponent(props) {
  const { classes } = props;
  return (
      <div>
        <Header /> 
        <br />
        <br /> 
        <div className={classes.root}>
            <Grid container spacing={0}>
                    <Grid item xs={1} sm={5} />
                    <Grid item xs={11} sm={4}>
                        <Typography 
                        variant="headline" 
                        gutterBottom
                        >
                            LAACO DERs
                        </Typography>
                    </Grid>
                    <Grid item xs={false} sm={3} />            
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                    <List>
                        <Link to="/profile"  className={classes.text}>
                            <ListItem divider>
                                <Avatar>
                                    <ProfileIcon />
                                </Avatar>
                                <ListItemText primary="Update Profile" />
                            </ListItem>
                        </Link>
                        <ListItem divider>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                            <ListItemText primary="DER-Recommend Approval Documents" secondary="Submit documents for final FAA approval" />
                        </ListItem>
                        <ListItem divider>
                            <Avatar>
                                <DoneIcon />
                            </Avatar>
                            <ListItemText primary="DER-Approved Documents" secondary="Submit DER-approved documents for DER-oversight" />
                        </ListItem>
                        <ListItem divider>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                            <ListItemText primary="DER Training Calendar" secondary="Review schedule / Register for training" />
                        </ListItem>
                    </List>
                    <br />
                    <Grid container spacing={0}>
                        <Grid item xs={3} sm={4}/>
                        <Grid item xs={6} sm={4}>
                            <Link to="home" className={classes.text}>
                                <Button 
                                variant="outlined" 
                                color="primary" 
                                className={classes.button}                    
                                >
                                    Home
                                </Button>
                            </Link>     
                        </Grid>
                        <Grid item xs={3} sm={4} />
                    </Grid>
                </Grid>                
                <Grid item xs={1} sm={3} />        
            </Grid>  
        </div>
      </div>
  );
}

DerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DerComponent);