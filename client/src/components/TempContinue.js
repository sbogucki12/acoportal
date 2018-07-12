import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    colors: {
        backgroundColor: 'black', 
        color: '#ffb04c'
    }
});

const TempContinue = (props) => {
    const { classes } = props; 
        return(            
            <div className={classes.colors}>
                <Typography variant="caption" gutterBottom align="center" className={classes.colors}>
                    Login currently disabled. Please click SUBMIT to continue. 
                </Typography>             
            </div>
        )
}

export default withStyles(styles)(TempContinue)