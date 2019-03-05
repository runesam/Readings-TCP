import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { TextFieldComponent } from '.';

const getName = (name, parent) => {
    if (parent) {
        return `${parent}.${name}`;
    }
    return name;
};

const setFieldToBeFocused = () => {
};

const FormFieldComponent = ({
                                field: {
                                    name,
                                    label,
                                    type,
                                    validators,
                                },
                                parent,
                            }) => (
    <Field
        setFieldToBeFocused={setFieldToBeFocused}
        component={TextFieldComponent}
        name={getName(name, parent)}
        type={type}
        label={label}
        placeholder={label}
        validate={validators}
    />
);

FormFieldComponent.propTypes = {
    field: PropTypes.shape({}).isRequired,
    parent: PropTypes.string,
};

FormFieldComponent.defaultProps = {
    parent: '',
};

export default FormFieldComponent;
