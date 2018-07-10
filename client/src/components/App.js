import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import WarningBanner from './WarningBanner';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
                    <Route exact path="/" component={Home} />
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        </div>
    )
};

export default App; 