import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
      button: {
        margin: theme.spacing.unit,
      },
  });

  class Login extends React.Component {    

  
    render() {
      const { classes } = this.props;
  
      return (
        <Paper className={classes.root} elevation={4}>
            <Grid container spacing={0}>
                <Grid item xs={3} sm={5} />
                <Grid item xs={6} sm={2}>
                    <Typography variant="subheading" gutterBottom>
                        Please Log In
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={5} />
            </Grid>                
            <Grid container spacing={0}>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="username"
                            label="Username"
                            className={classes.textField}            
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                        />
                        <br />
                        <Grid container spacing={0}>
                            <Grid item xs={3} sm={4} />
                            <Grid item xs={6} sm={4}>
                                <Button variant="outlined" color="primary" className={classes.button} align="center">
                                    Submit
                                </Button>                        
                            </Grid>
                            <Grid item xs={3} sm={4}/>  
                        </Grid>
                    </form>            
                </Grid>
                <Grid item xs={1} sm={3} />                           
            </Grid>            
        </Paper>
      );
    }
  }
  
  Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);