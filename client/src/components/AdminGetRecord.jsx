import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Header from './Header';

const styles = theme => ({
    button:             {
      margin: theme.spacing.unit      
    },
    input:              {
      display: 'none',
    },
    formControl:        {
        margin: theme.spacing.unit,
        width: '100%'
    }, 
    paperRoot:          {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    text: {
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: '3%'
    },
    controlNumberInput: {
        maxWidth: '90%'
    }, 
    heading:            {
        marginLeft: '2%',
        marginRight: '2%'
    }
  });

class AdminGetRecord extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            controlNumber: 'Please Search by Control Number',
            recordName: 'Temporary Record Name',
            employee: 'Temporary Employee Name',
            deadline: 'Temporary Deadline Date',
            recordType: 'Temporary Record Type'
        }
    };

    handleClick = () => {
        let controlNumber = '140L/1/18';
        fetch(`http://safe-falls-67621.herokuapp.com/api/wtsrecord?controlnumber=${controlNumber}`)
        .then((res) => {
            res.json()
            .then((body) => this.setState({
                controlNumber: body.controlNumber,
                recordName: body.recordName,
                employee: body.employee,
                deadline: body.deadline,
                recordType: body.recordType
            }))         
        })
    };

    handleChangeRecordName = (event) => {
        this.setState({
            recordName: event.target.value
        })
    };

    handleChangeEmployee = (event) => {
        this.setState({
            employee: event.target.value
        })
    };

    handleChangeDeadline = (event) => {
        this.setState({
            deadline: event.target.value
        })
    };

    handleChangeRecordType = (event) => {
        this.setState({
            recordType: event.target.value
        })
    };

    onSaveRecord = () => {
        alert("Saving disabled while app is in prototype.")
    }

    render(){
        const { classes } = this.props;

        return(
            <React.Fragment>
                <Header />
                <br />
                <br />
                <Grid container spacing={8}>
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                    <Paper className={classes.root} elevation={6}>
                        <Typography variant="caption" gutterBottom className={classes.text}>
                            This component is currently set up to allow users to query our external database by "control number" ("control number" being a term used by the office that refers to a uniquely identifiable number assigned to each record). When fully operational, this component will display the record associated with the control number that was searched, and will allow the user to edit the record and then save the updated record to the database.
                            <br />
                            <br />
                            Because this component is currently for "proof of concept" purposes only, functionality has been intentionally restricted.  Currently, the user can enter a control number (we'll use '140L/1/18').  That control number is then parsed by our server and used to query the MongoDB, no-SQL database that we have implemented on mLab.  The record resulting from that search is then returned, using the record's data to populate the fields below.
                            <br />
                            <br />
                            In this prototype version of the tool, users can edit the values in the record's fields.  But updated records can not be saved.
                            <br />
                        </Typography>
                        <br />    
                    
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="recordName">
                                Enter Control Number to Search:
                            </InputLabel>
                            <Input 
                            id="controlNumber" 
                            value='140L/1/18'
                            className={classes.controlNumberInput}
                            />
                        </FormControl>
                        <br />
                        <br />
                        <center>
                            <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => this.handleClick()}                        
                            >
                                Get Record
                            </Button>
                        </center>                        
                        <br />                   
                    </Paper>                    
                    </Grid>
                    <Grid item xs={1} sm={3} />
                </Grid>
                <br />
                <br />
                <Grid container spacing={8} align='center'>
                    <Grid item xs={1} sm={3} />
                    <Grid item xs={10} sm={6}>
                        <Paper className={classes.root} elevation={6}>
                            <br />
                            <Typography variant="subheading" gutterBottom className={classes.heading}>
                                <strong>Control Number:</strong> &nbsp; {this.state.controlNumber}
                            </Typography>
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="recordName">
                                    Record Name:
                                </InputLabel>
                                <Input 
                                id="recordName" 
                                value={this.state.recordName}
                                onChange={(event) => this.handleChangeRecordName(event)}
                                className={classes.controlNumberInput} 
                                />
                            </FormControl>
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="employee">
                                    Assigned to:
                                </InputLabel>
                                <Input 
                                id="employee" 
                                value={this.state.employee}
                                onChange={(event) => this.handleChangeEmployee(event)}
                                className={classes.controlNumberInput}  
                                />
                            </FormControl>
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="deadline">
                                    Deadline:
                                </InputLabel>
                                <Input 
                                id="deadline" 
                                value={this.state.deadline}
                                onChange={(event) => this.handleChangeDeadline(event)}
                                className={classes.controlNumberInput} 
                                />
                            </FormControl>
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="recordType">
                                    Record Type:
                                </InputLabel>
                                <Input 
                                id="recordType" 
                                value={this.state.recordType}
                                onChange={(event) => this.handleChangeRecordType(event)}
                                className={classes.controlNumberInput}  
                                />
                            </FormControl>
                            <br />
                            <br />
                            <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => this.onSaveRecord()}
                            >
                                Save Record
                            </Button>
                            <br />
                            <br />
                        </Paper>                            
                    </Grid>
                    <Grid item xs={1} sm={3}/>
                </Grid>
                <br />
                <br />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AdminGetRecord);