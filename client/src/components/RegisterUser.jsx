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

const styles = theme => ({
    paperRoot:  {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
      container:    {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl:  {
        margin: theme.spacing.unit,
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2,
      }
}); 

class RegisterUser extends React.Component {  
        state = {
            firstName: 'First',
            lastName: 'Last',
            password: 'Password',
            email: 'Email',
            street: 'Street Address',
            city: 'City',
            zip: 'Zip',
            company: 'Company',
            phone: 'Phone',
            relation: 'None'
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
                <Grid container spacing={0}>
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                        <Paper className={classes.root} elevation={6}>
                            <Grid container spacing={8} align='center'>
                                <Grid item xs={1} />
                                <Grid item xs={10}>
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
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="email">
                                            Email:
                                        </InputLabel>
                                        <Input 
                                        id="email" 
                                        value={this.state.email} 
                                        onChange={(event) => this.handleChange(event)} 
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="password">
                                            Password:
                                        </InputLabel>
                                        <Input 
                                        id="password" 
                                        value={this.state.password} 
                                        onChange={(event) => this.handleChange(event)} 
                                        />
                                    </FormControl>
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
                                    <form autoComplete="off">
                                        <FormControl className={classes.container}>
                                            <InputLabel htmlFor="relation">Which is your association with the LAACO:</InputLabel>
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
                                <Grid item xs={1} />
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={1} sm={3}/>                
                </Grid>                
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(RegisterUser);