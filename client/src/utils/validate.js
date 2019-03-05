export default (fieldName = 'Value') => (value) => {
    switch (typeof value) {
        case 'string':
            // TODO: negative number is being accepted because is
            //  getting here as type string after changing it in UI
            return value && value.trim().length ? undefined : `${fieldName} can not be empty`;
        case 'number':
            return value > 0 ? undefined : `${fieldName} needs to be greater than 0`;
        default:
            return `${fieldName} can not be empty`;
    }
};
