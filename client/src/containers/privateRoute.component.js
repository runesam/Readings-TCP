import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ loggedIn, ...rest }) => {
    if (loggedIn) {
        return <Route {...rest} />;
    }
    return <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
    loggedIn: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    const { dashboardUser: { loggedIn } } = state;
    return ({ loggedIn });
};

export default connect(mapStateToProps)(PrivateRoute);
