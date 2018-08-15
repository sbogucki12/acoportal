import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
     background: {
        backgroundColor: '#004ba0',
        textAlign: 'center'
    },
    spanBackground: {
        backgroundColor: 'black',
        color: '#ffb04c',
        marginTop: '3%', 
        marginBottom: '3%',
        fontSize: '10px', 
        padding: '1%'              
    },
    root: {
        flexGrow: 1
    },
}

class WarningBanner extends React.Component {
    render(){
        const { classes } = this.props; 

        return(
            <div className={classes.background}>            
                <Grid container spacing={0} className={classes.root}> 
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}>              
                        <Typography 
                        variant="caption" 
                        gutterBottom
                        className={classes.spanBackground}>
                            Notice: This app is a personal project, for demonstration purposely only, and has no official association with the U.S. Federal Government, including the Federal Aviation Administration.
                        </Typography> 
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>                
            </div>
        )
    }
}

export default withStyles(styles)(WarningBanner)