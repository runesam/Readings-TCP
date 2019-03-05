import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { reduxForm } from 'redux-form';

import { FieldsListComponent } from 'components';
import loginFields from 'model';

class LoginFormComponent extends PureComponent {
    render() {
        const {
            handleSubmit,
            error,
            promises,
        } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">
                    <span>Customer support dashboard</span>
                </Typography>
                <FieldsListComponent fields={loginFields} xs={12} />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    data-qa="login-submit"
                    onClick={handleSubmit}
                    disabled={promises.general}
                >
                    <span>Login</span>
                </Button>
                {Boolean(error) && (
                    <>
                        <br />
                        <br />
                        <Typography variant="button" data-qa="login-error-message" color="error" align="center">{error}</Typography>
                    </>
                )}
            </form>
        );
    }
}

LoginFormComponent.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    promises: PropTypes.shape({}).isRequired,
};

LoginFormComponent.defaultProps = {
    error: '',
};

export default reduxForm({
    form: 'login',
    enableReinitialize: true,
})(LoginFormComponent);
