import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import SearchPage from './pages/SearchPage';
import DevForm from './pages/DevForm';
import LoginPage from './pages/Login';
import RequestResetPage from './pages/RequestReset'
import ResetCode from './pages/ResetCode'
import PasswordReset from './pages/PasswordReset'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/busca" component={SearchPage} />
            <Route path="/cadastro/dev" component={DevForm} />
            <Route path="/login/dev"  component={LoginPage} />
            <Route path="/requestreset/dev"  component={RequestResetPage}/>
            <Route path="/resetcode/dev"  component={ResetCode}/> 
            <Route path="/passwordreset/dev"  component={PasswordReset}/> 
        </BrowserRouter>
    );
}

export default Routes;