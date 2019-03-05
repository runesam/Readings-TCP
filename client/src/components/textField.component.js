import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        minWidth: '100%',
        marginBottom: 7,
    },
});

const TextFieldComponent = (props) => {
    const {
        meta: { touched, error },
        setFieldToBeFocused,
            classes,
            input,
            label,
    ...custom
    } = props;

    return (
        <div>
            <TextField
                InputLabelProps={custom.type === 'date' ? { shrink: true } : null}
                className={classes.root}
                label={label}
                error={Boolean(touched && error)}
                inputRef={ref => setFieldToBeFocused(ref)}
                {...input}
                {...custom}
            />
            {Boolean(touched && error) && <Typography variant="subtitle2" color="error">{error}</Typography>}
        </div>
    );
};

TextFieldComponent.propTypes = {
	meta: propTypes.shape({}),
	setFieldToBeFocused: propTypes.func.isRequired,
	classes: propTypes.shape({}).isRequired,
	input: propTypes.shape({}).isRequired,
	label: propTypes.string,
};

TextFieldComponent.defaultProps = {
	label: '',
	meta: {},
};

export default withStyles(styles)(TextFieldComponent);
