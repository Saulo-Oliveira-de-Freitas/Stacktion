import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import DevList from './pages/TeacherList';
import DevForm from './pages/DevForm';
import LoginPage from './pages/Login';
import RequestResetPage from './pages/RequestReset'
import ResetCode from './pages/ResetCode'
import PasswordReset from './pages/PasswordReset'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/cliente" component={DevList} />
            <Route path="/dev" component={DevForm} />
            <Route path="/login"  component={LoginPage} />
            <Route path="/requestreset"  component={RequestResetPage}/>
            <Route path="/resetcode"  component={ResetCode}/> 
            <Route path="/passwordreset"  component={PasswordReset}/> 
        </BrowserRouter>
    );
}

export default Routes;