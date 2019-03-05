import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from 'actions/constants';

export default (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: return { ...state, loggedIn: true };
        case LOGOUT_SUCCESS: return { loggedIn: false };
        default: return state;
    }
};
