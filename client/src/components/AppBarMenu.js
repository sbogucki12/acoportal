import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  link: {
    textDecoration: 'none'
  }
});


class AppBarMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props; 
    
    return (
      <div>
        <MenuIcon
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick} 
          color="secondary" />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to="/home" className={classes.link}>Prospective Applicants</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/login" className={classes.link}>Existing LAACO Applicants</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/login" className={classes.link}>DERs</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/home" className={classes.link}>Logout</Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarMenu);