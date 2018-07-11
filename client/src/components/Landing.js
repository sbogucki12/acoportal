import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1, 
    textAlign: 'center',
    color: '#1976d2'
  },
  color: {
    color: '#1976d2'
  }, 
  icon: {
    height: '200px',
    width: '200px'
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: '#1976d2', 
    textDecoration: 'none'
  }
});

class Landing extends React.Component {  
    render() {
      const { classes } = this.props;       

      return (
        <div>
        <br />
        <br />
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <AirplaneIcon className={classes.icon} />
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <br />
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Typography 
              variant="display1"
              className={classes.color} 
              gutterBottom
              >
                Portal: LAACO
              </Typography> 
            </Grid>
            <Grid item xs={10} />
          </Grid>
          <br />
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Typography 
              variant="title"
              className={classes.color} 
              gutterBottom
              >
                Connecting the local Aircraft Certification Office to the Applicants It Serves
              </Typography>          
            </Grid>
            <Grid item xs={1} />
          </Grid>  
          <br />
          <Grid container spacing={0} className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Link to="/home" className={classes.link}>
                <Button 
                variant="outlined" 
                color="primary" 
                className={classes.button}              
                >              
                  Connect              
                </Button>
              </Link>
            </Grid> 
            <Grid item xs={1}  />             
          </Grid>
        </div>
      );
    }
  }
  

  
  export default withStyles(styles)(Landing);