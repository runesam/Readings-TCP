import { notEmpty } from 'utils';

export default [
    {
        name: 'username',
        label: 'Email',
        type: 'email',
        validators: [notEmpty('Email')],
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        validators: [notEmpty('Password')],
    },
];
