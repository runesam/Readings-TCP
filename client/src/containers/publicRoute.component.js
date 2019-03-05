import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ loggedIn, ...rest }) => {
    if (loggedIn) {
        return <Redirect to="/" />;
    }
    return <Route {...rest} />;
};

PublicRoute.propTypes = {
    loggedIn: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    const { dashboardUser: { loggedIn } } = state;
    return ({ loggedIn });
};

export default connect(mapStateToProps)(PublicRoute);
