import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import TempProfileImage from '../content/images/tempProfileImage.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AdvisorQuestion from './AdvisorQuestion';

const styles = theme => ({
    image: {
        maxHeight: '124px',
        maxWidth: '124px'
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
    button: {
        margin: theme.spacing.unit,
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    formRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {        
            name: '', 
            identity: this.props.user        
        };       
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };
    
    render(){
        const { classes } = this.props; 

        return(
            <div>
                <Header />
                <br />
                <Grid container spacing={0}>
                    <Grid item xs={1} sm={3}  />
                    <Grid item xs={10} sm={6}>
                        <Paper className={classes.root} elevation={4}>
                            <Grid container spacing={8} >
                                <Grid item xs={3} sm={5}/>
                                <Grid item xs={7} sm={5}>
                                    <Typography variant="headline" gutterBottom>
                                        User Profile
                                    </Typography>    
                                </Grid>
                                <Grid item xs={2} sm={2} />
                            </Grid>
                            <Grid container spacing={8} >
                                <Grid item xs={3} sm={5}/>
                                <Grid item xs={4} sm={2}>    
                                    <br />
                                    <img src={TempProfileImage} alt="Temp Profile" className={classes.image} /> 
                                    <br />                                                                      
                                </Grid>
                                <Grid item xs={3} sm={5} />
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={2} sm={4} md={4} />
                                <Grid item xs={9} sm={4} md={6}>
                                    <Button color="primary" className={classes.button}>
                                        Update Profile Picture
                                    </Button>                                         
                                </Grid>
                                <Grid item xs={1} sm={4} md={2} />                                    
                            </Grid>
                            <br />
                            <Grid container spacing={8} alignContent="center">
                                <Grid item xs={1} />
                                <Grid item xs={10}>
                                    <TextField
                                    id="firstname-input"
                                    label="Firstname"
                                    className={classes.textField}
                                    type="firstname"
                                    autoComplete="current-firstname"
                                    margin="normal"
                                    />
                                    <br />
                                    <TextField
                                    id="lastname-input"
                                    label="Lastname"
                                    className={classes.textField}
                                    type="lastname"
                                    autoComplete="current-lastname"
                                    margin="normal"
                                    />
                                    <br />
                                    <TextField
                                    id="password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    />
                                    <br />
                                    {(()=>{
                                        if(this.state.identity === "currentapp"){
                                            return null
                                        }else{
                                            return <AdvisorQuestion />
                                        }
                                    })()}                                    
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                            <br />
                            <Grid container spacing={0}>
                                <Grid item xs={3} sm={4} />
                                <Grid item xs={6} sm={4}>
                                    <Button variant="outlined" color="primary" className={classes.button}>
                                        Submit Updates
                                    </Button>
                                </Grid>
                                <Grid item xs={3} sm={4} />  
                            </Grid>    
                        </Paper>  
                    </Grid>
                    <Grid item xs={1} sm={3} />  
                </Grid>
                <br />
            </div>
        )
    }
};

export default withStyles(styles)(Profile);