import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './Landing';
import WarningBanner from './WarningBanner';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';
import LoginBig from './LoginBig';
import TempComponent from './TempComponent';

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
    return (        
        <div>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>        
            <BrowserRouter>
                <div>                    
                    <WarningBanner />
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