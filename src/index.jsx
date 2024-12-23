import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
	cash: 0,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CASH':
			return { ...state, cash: state.cash + action.payload };
		case 'GET_CASH':
			return { ...state, cash: state.cash - action.payload };

		default:
			return state;
	}
};

const store = createStore(reducer);
const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
