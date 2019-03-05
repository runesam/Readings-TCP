import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from './constants';

const login = (username, password, loaderKey) => ({
    type: LOGIN_START,
    payload: { username, password, loaderKey },
});

const loginFailure = (reason, loaderKey) => ({
    type: LOGIN_FAILURE,
    payload: { reason, loaderKey },
});

const loginSuccess = (response, loaderKey) => ({
    type: LOGIN_SUCCESS,
    payload: { response, loaderKey },
});

const logout = () => ({
    type: LOGOUT_START,
});

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

const logoutFailure = reason => ({
    type: LOGOUT_FAILURE,
    payload: { reason },
});

export {
    login,
    loginFailure,
    loginSuccess,
    logout,
    logoutSuccess,
    logoutFailure,
};
