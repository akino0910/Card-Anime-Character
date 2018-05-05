import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layouts/Layout';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
	console.log('store changed', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('root')
);
