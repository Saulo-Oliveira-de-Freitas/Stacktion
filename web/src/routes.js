import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import DevList from './pages/TeacherList';
import DevForm from './pages/DevForm';
import LoginPage from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/cliente" component={DevList} />
            <Route path="/dev" component={DevForm} />
            <Route path="/login"  component={LoginPage} />
        </BrowserRouter>
    );
}

export default Routes;