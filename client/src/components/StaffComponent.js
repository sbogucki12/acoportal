import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReportIcon from '@material-ui/icons/InsertChart';
import EngIcon from '@material-ui/icons/Group';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
    text: {
        textDecoration: 'none !important'
    },
    button: {
        margin: theme.spacing.unit
    },
});

function StaffComponent(props) {
  const { classes } = props;

  return (
      <div>
      <Header />
      <Grid container spacing={0}>      
        <Grid item xs={1} sm={4} />
        <Grid item xs={10} sm={4}>
        <br />
        <br />
            <Paper>
                <MenuList>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Admin." />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <EngIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Engineers" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <CheckIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Management" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Reports" />
                    </MenuItem>
                </MenuList>
                <br />
                <Grid container spacing={0}>
                    <Grid item xs={3} sm={4}/>
                    <Grid item xs={6} sm={6}>
                        <Link to="home" className={classes.text}>
                            <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}                    
                            >
                                Home
                            </Button>
                        </Link>     
                    </Grid>
                    <Grid item xs={3} sm={2} />
                </Grid>
            </Paper>
        </Grid>
        <Grid item xs={1} sm={4} />
      </Grid>
      
      
      
      </div>
      
  );
}

StaffComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffComponent);