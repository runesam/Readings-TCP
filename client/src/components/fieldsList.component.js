import React from 'react';
import Grid from '@material-ui/core/Grid';
import propTypes from 'prop-types';

import {
    FormFieldComponent,
} from '.';

const FieldsListComponent = ({ fields, parent, ...rest }) => fields.map(field => (
    <Grid item xs={3} key={field.name} {...rest}>
        <FormFieldComponent
            field={field}
            parent={parent}
        />
    </Grid>
));

FieldsListComponent.propTypes = {
    fields: propTypes.array,
};

FieldsListComponent.defaultProps = {
    fields: [],
};

export default FieldsListComponent;
