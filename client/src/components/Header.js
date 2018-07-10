import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = { 
    background1: {
        backgroundColor: '#004ba0'
    },
    background2: {
        backgroundColor: '#1976d2'
    },
    background3: {
        backgroundColor: '#63a4ff'
    }
}

const Header = (props) => {
    const { classes } = props;
    return(
        <div>
        <div className={classes.background1}><br /></div>
        <div className={classes.background2}><br /></div>
        <div className={classes.background3}><br /></div>
        </div>
    )
}

export default withStyles(styles)(Header);
