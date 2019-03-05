import { applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import dashboardUserMiddleware from './dashboardUserMiddleware';

export const history = createBrowserHistory();
const middleware = [
    routerMiddleware(history),
    dashboardUserMiddleware,
];

export default applyMiddleware(...middleware);
