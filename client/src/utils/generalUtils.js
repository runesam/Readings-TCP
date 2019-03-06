import moment from 'moment';

export const setParamsObjectToURL = (paramsObj) => {
    const params = new URLSearchParams();
    Object.keys(paramsObj).forEach(key => params.append(key, paramsObj[key]));
    return params;
};

export const getErrors = (reason) => {
    const { status, data } = reason.response;
    let errors = {};
    switch (Array.isArray(data)) {
        case true:
            errors = data.reduce((acc, item) => {
                acc[item.property] = item.message;
                return acc;
            }, {});
            break;
        default:
            if (status === 400) {
                /** @namespace data.error_description */
                errors._error = `${data.error}: ${data.error_description}`;
            } else if (status === 409) {
                errors = {
                    [data.property]: data.message,
                };
            } else {
                errors._error = JSON.stringify(data, undefined, 4);
            }
    }
    return errors;
};

export const extractDataFromReadings = (readings, activeMeter) => {
    if (Object.keys(readings).length) {
        return readings[activeMeter].map(reading => ({
            date: moment(reading.timestamp).format('HH:mm'),
            power: reading.data.power,
        }));
    }
    return [];
};
