import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import WorkIcon from '@material-ui/icons/Work';
import ProfileIcon from '@material-ui/icons/PermIdentity';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function CurrentAppplicants(props) {
  const { classes } = props;
  return (
      <div>
        <Header /> 
        <br /> 
        <br /> 
        <Grid container spacing={0}>
            <Grid item xs={1} sm={3} />
            <Grid item xs={10} sm={6}>
                <Paper className={classes.root} elevation={4}>
                    <div className={classes.root}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12}>
                                <br />
                                <Typography 
                                variant="headline" 
                                gutterBottom
                                align="center"
                                >
                                    Current LAACO Applicants
                                </Typography>
                            </Grid>   
                        </Grid>
                        <br />
                        <Grid container spacing={0}>
                            <Grid item xs={1} sm={3} />
                            <Grid item xs={10} sm={6}>
                                <List>
                                    <Link to="/profilecurrentapp"  className={classes.text}>
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
                                        <ListItemText primary="Submit Project Specific Certification Plans" />
                                    </ListItem>
                                    <a 
                                    href="https://www.faa.gov/other_visit/aviation_industry/designees_delegations/designee_types/media/DERDirectory.pdf"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={classes.text}
                                    >
                                        <ListItem divider>
                                            <Avatar>
                                                <SearchIcon />
                                            </Avatar>
                                            <ListItemText primary="Search for Designated Engineering Representatives (DERs)" />
                                        </ListItem>
                                    </a>
                                </List>
                                <br />
                                <Grid container spacing={0}>
                                    <Grid item xs={3} sm={3}/>
                                    <Grid item xs={6} sm={5}>
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
                </Paper>
            </Grid>
            <Grid item xs={1} sm={3} />
        </Grid>
      </div>
  );
}

CurrentAppplicants.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentAppplicants);