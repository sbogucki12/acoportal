import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './Landing';
import WarningBanner from './WarningBanner';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';
import LoginBig from './LoginBig';
import TempComponent from './TempComponent';
import DerLoginBig from './DerLoginBig';
import DerComponent from './DerComponent';
import Profile from './Profile';
import CurrentApplicants from './CurrentApplicants';
import StaffComponent from './StaffComponent';
import LoginStaff from './LoginStaff';
import AdminHome from './AdminHome';
import AdminRecord from './AdminRecord';


const theme = createMuiTheme({
    palette: {
      primary: {
          main:     "#1976d2",
          light:    "#63a4ff",
          dark:     "#004ba0"
      }, 
      secondary: {
          main:     "#e0e0e0",
          light:    "#ffffff",
          dark:     "#aeaeae"
      }, 
      textSecondary: {
          main:     "#ffb04c"
      }      
    },
  });
  
const App = () => {

    const CurrentApp = () => {
        return (
          <Profile 
            user="currentapp"            
          />
        );
      }

    return (        
        <div>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>        
            <BrowserRouter>                
                <div>                    
                    <WarningBanner />                    
                    <Route exact path="/adminRecord" component={AdminRecord} />
                    <Route exact path="/adminhome" component={AdminHome} />
                    <Route exact path="/loginstaff" component={LoginStaff} />
                    <Route exact path="/staffmain" component={StaffComponent} />
                    <Route exact path="/profilecurrentapp" render={CurrentApp} />
                    <Route exact path="/currentapp" component={CurrentApplicants} />
                    <Route exact path="/dermain" component={DerComponent} />
                    <Route exact path="/derlogin" component={DerLoginBig} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/temp" component={TempComponent}/>
                    <Route exact path="/login" component={LoginBig} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Landing} />
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        </div>
    )
};

export default App; 