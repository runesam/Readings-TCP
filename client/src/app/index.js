import React from 'react';
import store from 'store';
import { history } from 'middleware';

import Provider from './provider';
import Routes from './routes';

const App = () => (
    <Provider store={store} history={history}>
        <Routes />
    </Provider>
);

export default App;
