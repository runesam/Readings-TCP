import React from 'react';
import propTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.white.main,
        boxShadow: 'none',
    },
    backButton: {
        color: theme.palette.primary.main,
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    toolbar: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        padding: 0,
        '& a': {
            lineHeight: '70px',
            display: 'block',
            textDecoration: 'none',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'Roboto',
            color: theme.palette.primary.main,
            margin: '0 15px',
            '&.active': {
                fontWeight: 'bold',
            },
        },
    },
    logout: {
        right: 0,
        position: 'absolute',
        alignSelf: 'center',
        border: `2px solid ${theme.palette.primary.main}`,
        '& span': {
            fontWeight: 'bold',
        },
    },
});

const NavigationBar = (props) => {
    const {
        classes,
        goBack,
        logout,
    } = props;
    return (
        <AppBar position="sticky" className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={11}>
                    <Toolbar className={classes.toolbar}>
                        <Grid container direction="row" justify="space-between">
                            <Grid container>
                                <IconButton
                                    color="inherit"
                                    data-qa="goBack-button"
                                    onClick={goBack}
                                    aria-label="Open drawer"
                                    className={classes.backButton}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                                <NavLink exact to="/">
                                    <span>Home</span>
                                </NavLink>
                            </Grid>
                            <Button className={classes.logout} onClick={logout} data-qa="logout-button">
                                <Typography variant="button">Logout</Typography>
                            </Button>
                        </Grid>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
};

NavigationBar.propTypes = {
    classes: propTypes.shape({}).isRequired,
    goBack: propTypes.func.isRequired,
    logout: propTypes.func.isRequired,
};

export default withStyles(styles)(NavigationBar);
