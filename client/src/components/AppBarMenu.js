import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  link: {
    textDecoration: 'none'
  }, 
  text: {
    color: "rgba(0, 0, 0, 0.87)"
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
        <MenuItem onClick={this.handleClose}><Link to="/home" className={classes.link}><span className={classes.text}>Prospective Applicants</span></Link></MenuItem>
        <Link to="/login" className={classes.link}><MenuItem onClick={this.handleClose}>Existing LAACO Applicants</MenuItem></Link>
        <Link to="/derlogin" className={classes.link}><MenuItem onClick={this.handleClose}>DERs</MenuItem></Link>
        <Link to="/loginstaff" className={classes.link}><MenuItem onClick={this.handleClose}>LAACO Staff</MenuItem></Link>
        <Link to="/home" className={classes.link}><MenuItem onClick={this.handleClose}>Logout</MenuItem></Link>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarMenu);