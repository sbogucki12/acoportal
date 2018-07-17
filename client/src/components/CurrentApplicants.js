import React from  'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    tempStyle: {
        alignContent: 'center'
    }

})

class CurrentApplicants extends React.Component {
    render(){
        const { classes } = this.props; 
        return(
            <div>
                <h1 className={classes.tempStyle}>
                    Current Applicants Component
                </h1>
                <br />
                <Link to="/profilecurrentapp" user="applicant">Update Profile</Link>
            </div>)
    }

}

export default withStyles(styles)(CurrentApplicants);