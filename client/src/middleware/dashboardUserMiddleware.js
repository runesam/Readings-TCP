import moment from 'moment';
import { stopSubmit } from 'redux-form';
import { push } from 'connected-react-router';

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_START,
    LOGOUT_SUCCESS,
} from 'actions/constants';

import {
    Http,
    httpSetAuthHeader,
    httpRemoveAuthHeader,
} from 'app/http';

import {
    loginSuccess as loginSuccessAction,
    loginFailure as loginFailureAction,
    logoutSuccess as logoutSuccessAction,
    logoutFailure as logoutFailureAction,
} from 'actions';

import { getErrors, setParamsObjectToURL } from 'utils';

const { remove, set } = require('js-cookie');

const setAuthCookies = (auth) => {
    set('auth', JSON.stringify(auth), {
        path: '/',
        expires: moment().add(2, 'years').toDate(),
    });
};

const loginStart = (action, store) => {
    const { username, password, loaderKey } = action.payload;
    const loginUserData = setParamsObjectToURL({
        username,
        password,
    });

    Http.post('/api/oauth/token', loginUserData)
        .then(response => store.dispatch(loginSuccessAction(response, loaderKey)))
        .catch((reason) => {
            const errors = getErrors(reason);
            store.dispatch(stopSubmit('login', errors));
            store.dispatch(loginFailureAction(reason));
        });
};

const loginSuccess = ({ payload }) => {
    setAuthCookies(payload.response.data);
    httpSetAuthHeader(payload.response.data.token);
};

const logoutStart = (action, store) => {
    try {
        httpRemoveAuthHeader();
        remove('auth');
        store.dispatch(logoutSuccessAction());
    } catch (error) {
        store.dispatch(logoutFailureAction(error));
    }
};

export default store => next => (action) => {
    const { type } = action;
    switch (type) {
        case LOGIN_START: loginStart(action, store); return next(action);
        case LOGIN_SUCCESS: loginSuccess(action); return next(action);
        case LOGOUT_START: logoutStart(action, store); return next(action);
        case LOGOUT_SUCCESS: store.dispatch(push('/login')); return next(action);
        default: return next(action);
    }
};
