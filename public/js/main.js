import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import cookie from 'react-cookie';

// Import higher order components
import RequireAuth from './components/auth/authenticate.component';

// Import routing components
import {hashHistory, Router, Route, IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import custom components
import App from './components/index';
import NotFoundPage from './components/error/not-found.component';
import LoginForm from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import Settings from './components/settings/settings.component';
import Edit from './components/edit/edit.component';
import Templates from './components/templates/templates.component';
import Cms from './components/cms/cms.component';
import Profile from './components/profile/profile.component';
import SignUpForm from './components/signup/signup.component';
import ForgotForm from './components/forgot/forgot.component';
import SuperAdmin from './components/superAdmin/superAdmin.component';
import store from './store/store';

/**
 * Import all constants as an object.
 */
import * as ActionType from './constants/actionType';

const history = syncHistoryWithStore(hashHistory, store);
const token = cookie.load('token');
if (token) {
    // Update application state. User has token and is probably authenticated
    store.dispatch({
        type: ActionType.LOG_IN_SUCCESS,
        payload: token
    });
}

render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={LoginForm}/>
            <Route path="/signup" component={SignUpForm}/>
            <Route path="/forgot" component={ForgotForm}/>
            <Route path="/dashboard" component={App}>
                <IndexRoute component={RequireAuth(Dashboard)} />
            </Route>
            <Route path="/settings" component={App}>
                <IndexRoute component={RequireAuth(Settings)} />
            </Route>
            <Route path="/edit" component={App}>
                <IndexRoute component={RequireAuth(Edit)} />
            </Route>
            <Route path="/cms" component={App}>
                <IndexRoute component={RequireAuth(Cms)} />
            </Route>
            <Route path="/templates" component={App}>
                <IndexRoute component={RequireAuth(Templates)} />
            </Route>
            <Route path="/profile" component={App}>
                <IndexRoute component={RequireAuth(Profile)} />
            </Route>
            <Route path="/superadmin" component={App}>
                <IndexRoute component={RequireAuth(SuperAdmin)} />
            </Route>
            {/* if the previous routes are not found, with '*' redirect to Not Found page */}
            <Route path="*" component={NotFoundPage} /> 
        </Router>
    </Provider>,
    document.getElementById('root-container')
);