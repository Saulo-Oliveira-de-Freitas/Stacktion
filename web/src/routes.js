import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import SearchPage from './pages/SearchPage';
import DevForm from './pages/DevForm';
import LoginPage from './pages/Login';
import RequestResetPage from './pages/RequestReset'
import ResetCode from './pages/ResetCode'
import PasswordReset from './pages/PasswordReset'
import ProfilePage from './pages/ProfilePage';
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/busca" component={SearchPage} />
            <Route path="/cadastro" component={DevForm} />
            <Route path="/login"  component={LoginPage} />
            <Route path="/requestreset"  component={RequestResetPage}/>
            <Route path="/resetcode"  component={ResetCode}/> 
            <Route path="/passwordreset"  component={PasswordReset}/> 
            <Route path="/profile" component={ProfilePage}/> 
        </BrowserRouter>
    );
}

export default Routes;