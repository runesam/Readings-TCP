import React from 'react';
import {
    Switch,
    Router,
} from 'react-router-dom';

import { history } from 'middleware';

import {
    Home,
    Login,
} from 'pages';

import {
    PrivateRoute,
    PublicRoute,
} from 'containers';

export default () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute exact path="*" component={Home} />
        </Switch>
    </Router>
);
