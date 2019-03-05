import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {
		height: '100vh',
		'& > div': {
			borderRadius: 6,
			boxShadow: 'inset 0 0 7px 0 rgba(0, 0, 0, 0.2)',
		},
		'& button': {
			width: '100%',
			height: 50,
		},
		'& a': {
			textDecoration: 'none',
		},
	},
});

const LoginFormWrapper = ({ children, classes }) => (
    <Grid container justify="center" alignItems="center" spacing={40} className={classes.root}>
        <Grid item xs={4}>
            {children}
        </Grid>
    </Grid>
);

LoginFormWrapper.propTypes = {
    children: propTypes.node.isRequired,
    classes: propTypes.shape({}).isRequired,
};

export default withStyles(styles)(LoginFormWrapper);
