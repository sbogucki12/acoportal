import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
    
  
    render() {
      return (
        <div>
            <Typography variant="display4" gutterBottom>
                Display 4
            </Typography>
            <Button color="secondary" >Default</Button>
        </div>
      );
    }
  }
  

  
  export default Home;