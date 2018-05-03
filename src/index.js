import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layouts/Layout';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
