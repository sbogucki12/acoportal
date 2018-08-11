import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import WtsMongo from '../content/images/wtsMongo.JPG';
import Header from './Header';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
    image: {
        MaxHeight: '300px',
        maxWidth: '80%'
    }
});

class AdminGetRecords extends React.Component {   
    constructor(props){
        super(props)

        this.state = {
            isLoaded: false, 
            wtsRecords: []
        }
    }

    handleClick = () => {         
        fetch('https://safe-falls-67621.herokuapp.com/wtsrecords')
            .then(response => {
                return response.json();
            })            
            .then(data => { 
                this.setState(
                    {
                        isLoaded: true, 
                        wtsRecords: data
                    }
                )
            })             
    } 
    
    handleClose = () => {
        this.setState({
            isLoaded: false
        })
    }
    

    render(){
        const { classes } = this.props;
        const isLoaded = this.state.isLoaded;
        const wtsRecords = this.state.wtsRecords;
        const wtsRecord = wtsRecords.map((wtsRecord) => {
            return(
                <div key={wtsRecord.id}>                    
                    <Paper 
                    className={classes.paperRoot} 
                    elevation={6}
                    >
                        <br />
                        <Typography                                    
                        variant="title" 
                        gutterBottom 
                        align="center"
                        >
                            <strong>Control Number:</strong> &nbsp; 
                            {wtsRecord.controlNumber}
                        </Typography>
                        <br />
                        <Typography                                    
                        variant="body1" 
                        gutterBottom 
                        align="center"
                        >                                               
                            <strong>Record Name:</strong> &nbsp; 
                            {wtsRecord.recordName}
                            <br />
                            <strong>Assigned to:</strong> &nbsp; 
                            {wtsRecord.employee}
                            <br />
                            <strong>Record Type:</strong> &nbsp; 
                            {wtsRecord.recordType}
                            <br />
                            <strong>Deadline:</strong> &nbsp; 
                            {wtsRecord.deadline}
                            <br />
                        </Typography>
                        <br />
                    </Paper>
                    <br />                    
                </div>
                )
        })

        return(
            <React.Fragment>
                <Header />
                <Grid container spacing={8} align="center">
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                        <br  />
                        <Paper 
                        className={classes.paperRoot} 
                        elevation={6}
                        >
                            <Typography                                    
                            variant="subheading" 
                            gutterBottom                             
                            >
                                "Dummy" data is being stored in an external no-SQL, "mongoDB" database via an mLab instance (pictured below). Clicking "Get Records" pulls those records from the cloud storage and displays those records here.  
                                <br />
                                <br />
                                This prototype has no additional user functionality and is intended only to demonstrate data being retrieved from cloud storage.  
                                <br />
                                <br />
                                In a future state, the "dummy" data will feed reports, be searchable to employees, and be open for updating here.    
  
                            </Typography>
                            <br />
                            <img src={WtsMongo} className={classes.image} alt="Database Example"/>                   

                        </Paper>
                    </Grid>
                    <Grid item xs={1} sm={3} />
                </Grid>     
                <Grid container spacing={8} align="center">
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                        {
                        isLoaded ? null :
                            <div>
                                <Paper 
                                className={classes.paperRoot} 
                                elevation={6}
                                >
                                    <Grid container spacing={8}>
                                        <Grid item xs={1} sm={2} />
                                        <Grid item xs={10} sm={8}>                                    
                                            <Button 
                                            variant="outlined" 
                                            color="primary" 
                                            className={classes.button}
                                            onClick={() => this.handleClick()}
                                            >
                                                Show Records
                                            </Button>
                                            <br />
                                        </Grid>
                                        <Grid item xs={1} sm={2} />
                                    </Grid>
                                </Paper>
                                <br />
                            </div>
                        }
                    </Grid>
                    <Grid item xs={1} sm={3} />
                </Grid>

                
                <Grid container spacing={8} align="center">
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                        {isLoaded ? wtsRecord : null}
                        {isLoaded ? 
                            <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => this.handleClose()}
                            >
                                Hide Records
                            </Button> 
                            : null}                
                    </Grid>    
                    <Grid item xs={1} sm={3} />    
                </Grid> 
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AdminGetRecords);