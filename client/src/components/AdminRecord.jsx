import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Header from './Header';

const styles = theme => ({  
  button:       {
    margin: theme.spacing.unit    
    }, 
  root:         {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    },
  formControl:  {
    margin: theme.spacing.unit,
    },
  textField:    {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    },
  menu:         {
    width: '100%',
    },
  linkText:     {
    textDecoration: 'none'
    }
});

var PageInfo = () => {
    return(
        <div>
            <hr />            
            <Typography variant="body1" gutterBottom>                
                This component is an example of how LAACO office administrative staff will be able to enter records into a (presently unbuilt) functioning tracking system.  The data entered by the administrative personnel are reflected at the bottom of the component; though, the "Save Record" button is not currently in service.  This component is a prototype to present future intended functionality.                
            </Typography>
            <hr />            
        </div>
    )
}

class AdminRecord extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            showPageInfo: false, 
            recordName: "", 
            branch: "", 
            employee: "", 
            recordType: "", 
            controlNumber: "", 
            counter: 0, 
            deadline: ""
        }
    };
    
    onTogglePageInfo = () => {
        this.setState((prevState) => ({
            showPageInfo: !prevState.showPageInfo
        }))
        console.log("button clicked!")
    }

    showPageInfo = () => {
        if(this.state.showPageInfo){
            return(
                <PageInfo />
            )
        }
    }

    handleChangeRecordName = (event) => {
        this.setState({
            recordName: event.target.value
        })
    }

    handleChangeBranch = (event) => {
        this.setState({
            branch: event.target.value
        })
    }

    handleChangeEmployee = (event) => {
        this.setState({
            employee: event.target.value
        })
    }

    handleChangeRecordType = (event) => {
        this.setState({
            recordType: event.target.value
        })
    }

    handleCreateControlNumber = () => {
        this.setState((prevState) => ({
            controlNumber: this.state.branch + "/" + prevState.counter++ + "/18"
        }))
    }

    handleSaveRecord = () => {
        alert("Saving Records Not Implemented in Prototype")
    }

    handleCreateDeadline = () => {
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }    

        let deadline = new Date(); 
        let daysToAdd; 
        if(this.state.recordType === "Test Plan (DER Approved)" || this.state.recordType === "Test Report (DER Approved)"){
            daysToAdd = 15; 
        } else if(this.state.recordType === "Test Plan (DER Recommend Approval)" || this.state.recordType === "Test Report (DER Recommend Approval)"){
            daysToAdd = 30; 
        } else if(this.state.recordType === "Project Specific Certification Plan"){
            daysToAdd = 180; 
        } else if(this.state.recordType === "DER Application"){
            daysToAdd = 90;
        } else{
            daysToAdd = 0;
        }
       
        deadline = deadline.addDays(daysToAdd);
        let dd = deadline.getDate();
        let month = deadline.getMonth() + 1;        
        let mm;                 
        switch(month){
            case(1):
                mm = "jan"
                break;
            case(2):
                mm = "feb"
                break;
            case(3):
                mm = "mar"
                break; 
            case(4):
                mm = "apr"
                break; 
            case(5):
                mm = "may"
                break; 
            case(6):
                mm = "jun"
                break; 
            case(7):
                mm = "jul"
                break; 
            case(8):
                mm = "aug"
                break; 
            case(9):
                mm = "sep"
                break; 
            case(10):
                mm = "oct"
                break; 
            case(11):
                mm = "nov"
                break; 
            case(12):
                mm = "dec"
                break;
            default: 
                mm = "error" 
        }

        let yr = deadline.getFullYear();

        let formattedDeadline = dd + '/' + mm + '/' + yr;

        this.setState({
            deadline: formattedDeadline
        })
    }
    
    render() {
      const { classes } = this.props;  
      const showPageInfoBool = this.state.showPageInfo;         
      const branches   = [
        {
            value: '100L',
            label: '100L',
        },
        {
            value: '103L',
            label: '103L',
        },
        {
            value: '120L',
            label: '120L',
        },
        {
            value: '130L',
            label: '130L',
        },
        {
            value: '140L',
            label: '140L',
        },
        {
            value: '150L',
            label: '150L',
        },
        {
            value: '160L',
            label: '160L',
        },
    ]
    const recordTypes   = [
        {
            value: 'Project Specific Certification Plan',
            label: 'Project Specific Certification Plan',
        },
        {
            value: 'Test Plan (DER Approved)',
            label: 'Test Plan (DER Approved)',
        },
        {
            value: 'Test Plan (DER Recommend Approval)',
            label: 'Test Plan (DER Recommend Approval)',
        },
        {
            value: 'DER Application',
            label: 'DER Application',
        },
        {
            value: 'Test Report (DER Approved)',
            label: 'Test Report (DER Approved)',
        },
        {
            value: 'Test Report (DER Recommend Approval)',
            label: 'Test Report (DER Recommend Approval)',
        },
    ]

      return (
        <React.Fragment>
            <Header />
            <Grid container spacing={8} align="center">
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm ={6}>
                    <br />
                    <Typography variant="display1" gutterBottom align="center">
                        <b>Admin:</b> &nbsp; Record Entry Example
                    </Typography>
                    <br />

                    <Button 
                    variant="outlined" 
                    color="primary"                     
                    className={classes.button}
                    onClick={() => {this.onTogglePageInfo()}}
                    >
                        Info About This Component
                    </Button>
                    {showPageInfoBool ? <PageInfo /> : null}
                    <br />
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>

            <br />

            <Grid container spacing={8}>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <Paper className={classes.root} elevation={8}>
                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>           
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="name-simple">Record Name:</InputLabel>
                                    <Input 
                                    id="name-simple" 
                                    type="text" 
                                    name="recordName" 
                                    onChange={(event) => this.handleChangeRecordName(event)}
                                    />
                                </FormControl>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}> 
                                <FormControl> 
                                    <TextField
                                    id="select-branch"
                                    select
                                    label="Branch"
                                    className={classes.textField}
                                    value={this.state.branch}
                                    onChange={(event) => this.handleChangeBranch(event)}
                                    SelectProps={{
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    helperText="Select the Assigned Branch"
                                    margin="normal"
                                    >
                                    {branches.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </FormControl>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}> 
                                <FormControl>
                                    <InputLabel htmlFor="assignedEmp">Assigned Employee:</InputLabel>
                                    <Input 
                                    id="assignedEmp" type="text" name="employeeName" onChange={(event) => this.handleChangeEmployee(event)}/>
                                </FormControl>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>                             
                                <FormControl>
                                    <TextField
                                    id="select-recordType"
                                    select
                                    label="Record Type"
                                    className={classes.textField}
                                    value={this.state.recordType}
                                    onChange={(event) => this.handleChangeRecordType(event)}
                                    SelectProps={{
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    helperText="Select the Record Type"
                                    margin="normal"
                                    >
                                    {recordTypes.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>  
                                </FormControl>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>  
                                <Button 
                                    variant="outlined" 
                                    color="primary"                     
                                    className={classes.button}
                                    onClick={() => {this.handleCreateControlNumber()}}
                                    >
                                        Generate Control Number
                                </Button>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>  
                                <Button 
                                    variant="outlined" 
                                    color="primary"                     
                                    className={classes.button}
                                    onClick={() => {this.handleCreateDeadline()}}
                                    >
                                        Generate Deadline
                                </Button>
                            </Grid>  
                            <Grid item xs={1} />
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>

            <br />
            
            <Grid container spacing={8}>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8}>
                    <Paper className={classes.root} elevation={8}>
                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="headline" gutterBottom align="center">
                                    Current Record
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                    <b>Record Name:</b> &nbsp; {this.state.recordName} 
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                     <b>Branch:</b> &nbsp; {this.state.branch}
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                     <b>Assigned Employee:</b> &nbsp; {this.state.employee}
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                     <b>Record Type:</b> &nbsp; {this.state.recordType}
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                     <b>Control Number:</b> &nbsp; {this.state.controlNumber}
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Typography variant="subheading" gutterBottom align="center">
                                     <b>Deadline:</b> &nbsp; {this.state.deadline}
                                </Typography>                             
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>

                        <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Button 
                                variant="outlined" 
                                color="primary"                     
                                className={classes.button}
                                onClick={() => {this.handleSaveRecord()}}
                                >
                                    Save Record
                                </Button>                            
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>                                              
                    </Paper>
                    <br />
                    <Grid container spacing={8} align="center">
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <Link to="/home" className={classes.linkText}>                                
                                    <Button 
                                    variant="outlined" 
                                    color="primary"                     
                                    className={classes.button}                                
                                    >
                                        Home
                                    </Button>
                                </Link>                                                         
                            </Grid>
                            <Grid item xs={1} />                        
                        </Grid>                                              
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
        </React.Fragment>
      );
    }
  }
  

  
  export default withStyles(styles)(AdminRecord);