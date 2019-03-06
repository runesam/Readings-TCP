import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends PureComponent {
    handleChange = (event) => {
        const { onChangeMeter } = this.props;
        onChangeMeter(event.target.value);
    };

    render() {
        const { classes, meters, activeMeter } = this.props;

        if (meters.length) {
            return (
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="meters-simple">Smart Meters</InputLabel>
                        <Select
                            value={activeMeter}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'meter',
                                id: 'meters-simple',
                            }}
                        >
                            {meters.map(meterId => (
                                <MenuItem key={meterId} value={meterId}>{`Meter ${meterId}`}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </form>
            );
        }
        return <p>No meters or readings yet</p>;
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    meters: PropTypes.array.isRequired,
    activeMeter: PropTypes.string.isRequired,
    onChangeMeter: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleSelect);
