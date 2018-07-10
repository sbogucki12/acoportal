import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 

const Home = () => {
   return <h2>Home</h2>
};

const Login = () => {
    return <h2>Login</h2>
};

const Header = () => {
    return  <h3>This is the Header</h3>
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App; 