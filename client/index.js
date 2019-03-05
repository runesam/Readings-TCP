import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from 'app/index';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(RootContainer);

if (module.hot) {
    module.hot.accept('app/index.js', () => {
        const NextRootContainer = require('app/index').default;
        render(NextRootContainer);
    });
}
