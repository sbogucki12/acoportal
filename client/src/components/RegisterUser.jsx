import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { usStates } from './usStates';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    paperRoot:      {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container:      {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl:    {
        margin: theme.spacing.unit,
    },
    selectEmpty:    {
        marginTop: theme.spacing.unit * 2,
    }, 
    password:       {
          maxWidth: '80%'
    }
}); 

class RegisterUser extends React.Component {  
    state = {
        firstName: 'First',
        lastName: 'Last',
        password: '',
        password2: '',
        email: 'Email',
        street: 'Street Address',
        city: 'City',
        usState: '',
        zip: 'Zip',
        company: 'Company',
        phone: 'Phone',
        relation: 'None', 
        advisor: '', 
        showPassword: false, 
        showPassword2: false
    } 

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log(this.state.relation);
    };
    
    relationSelected = event => {
        this.setState(() => {
          return {
            relation: event.target.value
          }
        })
    };

    advisorSelected = event => {
        this.setState(() => {
          return {
            advisor: event.target.value
          }
        })
    };

    stateSelected = event => {
        this.setState(() => {
          return {
            usState: event.target.value
          }
        })
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };
    
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleMouseDownPassword2 = event => {
        event.preventDefault();
    };
    
    handleClickShowPassword2 = () => {
        this.setState(state => ({ showPassword2: !state.showPassword2 }));
    };

    advisors = [
        {
            name: "N/A"
        },
        {
            name: "Joe Advisor"
        },
        {
            name: "Jane Advisor"
        },
        {
            name: "N. Gineer"
        },
        {
            name: "Buzz Lightyear"
        },
        {
            name: "Speed Racer"
        }
      ];

    showAdvisor = () => {
        const styles = theme => ({
            container:    {
                display: 'flex',
                flexWrap: 'wrap',
              },
        })
        const { classes } = this.props; 
        if(this.state.relation === 'DER'){
            return(
                <div>
                    <form autoComplete="off">
                        <FormControl className={classes.container}>
                            <InputLabel htmlFor="advisor">Please Select Your Advisor:</InputLabel>
                            <Select
                            value={this.state.advisor}   
                            onChange={this.advisorSelected} 
                            >
                                {this.advisors.map(advisor => (
                                    <MenuItem value={advisor.name} key={advisor.name}>
                                        {advisor.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </form>
                    <br />
                </div>
            )
        }
    };
    
    relations = [
        {
            name: "None"
        },
        {
            name: "Prospective LAACO Applicant"
        },
        {
            name: "Current LAACO Applicant"
        },
        {
            name: "DER"
        },
        {
            name: "Other"
        }
      ];      

    render(){
        const { classes } = this.props;
        
        return(
                <React.Fragment>
                    <Header />
                    <br />
                    <br />                
                    <Grid container spacing={0} align='center'>
                        <Grid item xs={1} sm={3} />
                        <Grid item xs={10} sm={6}>
                            <Paper className={classes.paperRoot} elevation={6}>                            
                                <Typography variant="title" gutterBottom>
                                    Please provide info to register for this site: 
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={1} sm={3} />
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={0}>
                        <Grid item xs={1} sm={3} />
                        <Grid item xs={10} sm={6}>
                            <Paper className={classes.paperRoot} elevation={6}>
                                <Grid container spacing={8} align='center'>
                                    <Grid item xs={1} />
                                    <Grid item xs={10}>
                                        <Grid container spacing={8} align='center'>
                                            <Grid item xs={12}>                                    
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel  htmlFor="firstName">
                                                        First Name:
                                                        </InputLabel>
                                                    <Input 
                                                    id="firstName"                                         
                                                    value={this.state.firstName} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    /> 
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="lastName">
                                                    Last Name:
                                                    </InputLabel>
                                                    <Input 
                                                    id="lastName"                                        
                                                    value={this.state.lastName} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="email">
                                                    Email:
                                                    </InputLabel>
                                                    <Input 
                                                    width='100%'
                                                    id="email" 
                                                    value={this.state.email} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>            
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="password">
                                                    Password:
                                                    </InputLabel>
                                                    <Input
                                                    className={classes.password}                                                     
                                                    type={this.state.showPassword ? 'text' : 'password'} 
                                                    value={this.state.password} 
                                                    onChange={(event) => this.handleChange(event)}
                                                    endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                onMouseDown={this.handleMouseDownPassword}
                                                                >
                                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        } 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="password2">
                                                        Confirm Password:
                                                    </InputLabel>
                                                    <Input 
                                                    id="password2"
                                                    className={classes.password}  
                                                    type={this.state.showPassword2 ? 'text' : 'password'} 
                                                    value={this.state.password2} 
                                                    onChange={(event) => this.handleChange(event)}
                                                    endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword2}
                                                                onMouseDown={this.handleMouseDownPassword2}
                                                                >
                                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        } 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="company">
                                                        Company:
                                                    </InputLabel>
                                                    <Input 
                                                    id="company" 
                                                    value={this.state.company}                                         
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="street">
                                                        Street Address:
                                                    </InputLabel>
                                                    <Input 
                                                    id="street" 
                                                    value={this.state.street} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl> 
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="city">
                                                        City:
                                                    </InputLabel>
                                                    <Input 
                                                    id="city" 
                                                    value={this.state.city} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid> 
                                            <Grid item xs={12}>
                                                <form autoComplete="off">
                                                    <FormControl className={classes.container}>
                                                        <FormHelperText>State:</FormHelperText>
                                                        <Select
                                                        value={this.state.usState}   
                                                        onChange={this.stateSelected} 
                                                        >
                                                            {usStates.map(usState => (
                                                            <MenuItem value={usState.name} key={usState.name}>
                                                            {usState.name}
                                                            </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </form>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="zip">
                                                    Zip Code:
                                                    </InputLabel>
                                                    <Input 
                                                    id="zip" 
                                                    value={this.state.zip} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel htmlFor="phone">
                                                        Phone Number:
                                                    </InputLabel>
                                                    <Input 
                                                    id="phone" 
                                                    value={this.state.phone} 
                                                    onChange={(event) => this.handleChange(event)} 
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <form autoComplete="off">
                                                    <FormControl className={classes.container}>
                                                        <InputLabel htmlFor="relation">
                                                            Which is your association with the LAACO:
                                                        </InputLabel>
                                                        <Select
                                                        value={this.state.relation}   
                                                        onChange={this.relationSelected} 
                                                        >
                                                            {this.relations.map(relation => (
                                                            <MenuItem value={relation.name} key={relation.name}>
                                                            {relation.name}
                                                            </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </form>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {this.showAdvisor()}
                                            </Grid> 
                                        </Grid>
                                    </Grid>        
                                </Grid>           
                            </Paper>                
                        </Grid>                    
                    </Grid>
                </React.Fragment>               
        )
    }
}

export default withStyles(styles)(RegisterUser);