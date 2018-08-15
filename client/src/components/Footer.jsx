import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

function Footer(props){
    const { classes } = props; 
    return(
        <div className={classes.background}>            
            <Grid container spacing={0} className={classes.root}> 
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>              
                    <Typography 
                    variant="caption" 
                    gutterBottom
                    className={classes.spanBackground}>
                        Notice: This is a personal project and, as such, has no official association with any office of the United States federal government, to include the Federal Aviation Administration. 
                    </Typography> 
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>                
        </div>
    )    
}

export default withStyles(styles)(Footer);