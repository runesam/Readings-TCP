import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoginFormComponent, LoginFormWrapperComponent } from '.';

class LoginComponent extends PureComponent {
    handleSubmit = ({ username, password }) => {
        const { handleSubmit } = this.props;
        return handleSubmit(username, password);
    };

    render() {
        const { promises } = this.props;
        return (
            <LoginFormWrapperComponent>
                <LoginFormComponent
                    promises={promises}
                    onSubmit={this.handleSubmit}
                />
            </LoginFormWrapperComponent>
        );
    }
}

LoginComponent.propTypes = {
    promises: PropTypes.shape({}).isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
