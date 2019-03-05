import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { goBack } from 'connected-react-router';
import { logout } from 'actions';

import { NavigationBarComponent } from 'components';

const styles = {
    progress: {
        width: '100%',
        position: 'fixed',
        zIndex: 100000,
        top: 0,
    },
};

const PrimaryAppBar = (props) => {
    const {
        children,
        classes,
        general,
        loggedIn,
        goBackAction,
        logoutAction,
    } = props;
    return (
        <>
            {general && <LinearProgress className={classes.progress} />}
            {loggedIn && (
                <NavigationBarComponent
                    goBack={goBackAction}
                    logout={logoutAction}
                />
            )}
            {children}
        </>
    );
};

PrimaryAppBar.propTypes = {
    children: PropTypes.node.isRequired,
    goBackAction: PropTypes.func.isRequired,
    classes: PropTypes.shape({}).isRequired,
    logoutAction: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    general: PropTypes.bool,
};

PrimaryAppBar.defaultProps = {
    general: false,
};

const StyledPrimaryAppBar = withStyles(styles)(PrimaryAppBar);
const mapStateToProps = (state) => {
    const { promises: { general }, dashboardUser: { loggedIn } } = state;
    return ({ general, loggedIn });
};

export default connect(mapStateToProps, {
    goBackAction: goBack,
    logoutAction: logout,
})(StyledPrimaryAppBar);
