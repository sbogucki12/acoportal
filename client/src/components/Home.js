import React from 'react';
import Header from './Header';
import HomeTabs from './HomeTabs';
import Grid from '@material-ui/core/Grid';

function Home (){
    return (
        <div>
            <Header />
            <br />
            <Grid container spacing={0}>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                        <HomeTabs />
                </Grid>
                <Grid item xs={false} sm={2} />            
            </Grid>
        </div>
    )
}
    


export default Home; 
