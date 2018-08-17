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
            advisor: 'N/A'
        }
        
    }

    advisorSelected = event => {
        this.setState(() => {
          return {
            advisor: event.target.value
          }
        })
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

    render(){
        const { classes } = this.props;
        return(
            <form className={classes.formRoot} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Advisor Name</InputLabel>
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
        )
    }                
}

export default withStyles(styles)(AdvisorQuestion);