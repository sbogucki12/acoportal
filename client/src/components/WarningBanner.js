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
        marginTop: '2%', 
        marginBottom: '2%'
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
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>              
                        <Typography 
                        variant="caption" 
                        gutterBottom
                        className={classes.spanBackground}>
                            Notice: This app is currently for demonstration purposes only!
                        </Typography> 
                    </Grid>
                    <Grid item xs={1} sm={3} />
                </Grid>                
            </div>
        )
    }
}

export default withStyles(styles)(WarningBanner)