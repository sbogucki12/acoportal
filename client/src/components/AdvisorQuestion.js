import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
})

class AdvisorQuestion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        
    }

    render(){
        const { classes } = this.props;
        return(
            <form className={classes.formRoot} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Advisor Name</InputLabel>
                        <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        inputProps={{
                                        name: 'name',
                                        id: 'name-simple',
                                    }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Advisor1"}>Advisor1</MenuItem>
                            <MenuItem value={"Advisor2"}>Advisor2</MenuItem>
                            <MenuItem value={"Advisor3"}>Advisor3</MenuItem>
                        </Select>
                    </FormControl>                                    
            </form>    
        )
    }                
}

export default withStyles(styles)(AdvisorQuestion);