import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({

});

const DerComponent = () => {
    return(
        <div>
            <h1>DER Component</h1>

            <Link to="/profile">Update Profile</Link>
        </div>
    )
}

export default withStyles(styles)(DerComponent);