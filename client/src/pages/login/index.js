import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { login } from 'actions';

import { LoginComponent } from './components';

class Index extends PureComponent {
    static propTypes = {
        promises: propTypes.shape({}).isRequired,
        loginAction: propTypes.func.isRequired,
    };

    handleSubmit = (username, password) => {
        const { loginAction } = this.props;
        loginAction(username, password);
    };

    render() {
        const { promises } = this.props;
        return <LoginComponent promises={promises} handleSubmit={this.handleSubmit} />;
    }
}

const mapStateToProps = ({ user, promises }) => ({ user, promises });

export default connect(mapStateToProps, {
    loginAction: login,
})(Index);
