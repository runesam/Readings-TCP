import http from 'axios';
import { logout } from 'actions';

const instance = http.create({
    baseURL: process.env.API_URL || '/',
});

const httpSetAuthHeader = (accessToken) => {
    instance.defaults.headers.common.authorization = accessToken;
};

const httpRemoveAuthHeader = () => {
    delete instance.defaults.headers.common.authorization;
};

const responseSuccessHandler = response => response;

const responseErrorHandler = store => (error) => {
    if (error.response.status === 401) {
        httpRemoveAuthHeader();
        store.dispatch(logout());
    }
    throw error;
};

// const extractPartnerId = src.store => (config) => {
//     const currentPath = src.store.getState().router.location.pathname;
//
//     let partner = '';
//     if (currentPath.includes('/login')) {
//         partner = 'cc-service';
//     } else {
//         partner = src.store.getState().router.location.pathname.split('/')[1] || 'cc-service';
//     }
//
//     const customConfig = { ...config };
//     customConfig.headers.common.partnerId = partner;
//     return customConfig;
// };

const assignInterceptor = (store) => {
    // instance.interceptors.request.use(extractPartnerId(src.store));
    instance.interceptors.response.use(responseSuccessHandler, responseErrorHandler(store));
};

export {
    instance as Http,
    httpSetAuthHeader,
    httpRemoveAuthHeader,
    responseSuccessHandler,
    responseErrorHandler,
    assignInterceptor,
    // extractPartnerId,
};
